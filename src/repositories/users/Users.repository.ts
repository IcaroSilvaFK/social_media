import { User } from '@prisma/client';
import { prismaClient } from '../../configs/prisma';
import { AppError } from '../../errors/App.error';
import { IUsersReposiotry } from './interfaces/Users.repository.interface';
import { IUserType } from './interfaces/Users.types';

export class UsersRepository implements IUsersReposiotry {
  async create(data: IUserType): Promise<User> {
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new AppError('User alredy exists', 404);
    }

    try {
      return await prismaClient.user.create({
        data: {
          ...data,
        },
      });
    } catch (err) {
      throw new Error();
    }
  }
  async update(id: string, data: Partial<IUserType>): Promise<User> {
    const userExists = await prismaClient.user.findFirst({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new AppError('User dont exists in database', 404);
    }
    try {
      return await prismaClient.user.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });
    } catch (err) {
      throw new AppError('User dont exists in database', 404);
    }
  }
  async findOne(email: string): Promise<User> {
    try {
      return prismaClient.user.findFirstOrThrow({
        where: {
          email,
        },
      });
    } catch (err) {
      throw new AppError('User dont exists in database', 404);
    }
  }
  async delete(id: string): Promise<void> {
    const userExists = await prismaClient.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new AppError('User dont exists in database', 404);
    }

    try {
      await prismaClient.user.delete({
        where: { id },
      });
    } catch (err) {
      throw new Error();
    }
  }
}
