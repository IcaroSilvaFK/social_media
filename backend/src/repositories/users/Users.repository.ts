import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { prismaClient } from '../../configs/prisma';
import { AppError } from '../../errors/App.error';
import { IUsersReposiotry } from './interfaces/Users.repository.interface';
import { IUserType } from './interfaces/Users.types';

interface IResponseUser {
  email: string;
  _count: {
    follows: number;
  };
  createdAt: Date;
  username: string;
  id: string;
  avatar_url: {
    avatar: string;
  } | null;
}

interface ILoginUser extends IResponseUser {
  password: string;
}

interface IGetUserProps {
  _count: {
    follows: number;
  };
  avatar_url: {
    avatar: string;
  } | null;
  username: string;
  email: string;
  createdAt: Date;
  id: string;
}

export class UsersRepository implements IUsersReposiotry {
  async create(data: IUserType): Promise<IResponseUser> {
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
        select: {
          email: true,
          _count: {
            select: {
              follows: true,
            },
          },
          createdAt: true,
          username: true,
          id: true,
          avatar_url: {
            select: {
              avatar: true,
            },
          },
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2002': {
            throw new AppError('Unique constraint failed', 500);
          }
          case 'P2005': {
            throw new AppError(
              "The value stored in the database is invalid for the field's type",
              500
            );
          }
          case 'P2007': {
            throw new AppError('Data validation error', 500);
          }
          default: {
            throw new AppError(err.message, 500);
          }
        }
      }
      throw new AppError('Internal server error', 500);
    }
  }
  async update(id: string, data: Partial<IUserType>): Promise<User> {
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
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2007': {
            throw new AppError('Data validation error ', 500);
          }
          case 'P2009': {
            throw new AppError('Failed to validate the query', 500);
          }
          case 'P2010': {
            throw new AppError('Raw query failed', 500);
          }
          case 'P2025': {
            throw new AppError(
              'An operation failed because it depends on one or more records that were required but not found',
              500
            );
          }
          default: {
            throw new AppError(err.message, 500);
          }
        }
      }
      throw new AppError('Internal server error', 500);
    }
  }
  async findByEmail(email: string): Promise<ILoginUser> {
    try {
      return await prismaClient.user.findFirstOrThrow({
        where: {
          email,
        },
        select: {
          avatar_url: {
            select: {
              avatar: true,
            },
          },
          _count: {
            select: {
              follows: true,
            },
          },
          createdAt: true,
          email: true,
          password: true,
          username: true,
          id: true,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new AppError(err.message, 500);
      }
      throw new AppError('User does not exist', 400);
    }
  }
  async findById(id: string): Promise<IGetUserProps> {
    try {
      return await prismaClient.user.findFirstOrThrow({
        where: {
          id,
        },
        select: {
          _count: {
            select: {
              follows: true,
            },
          },
          avatar_url: {
            select: {
              avatar: true,
            },
          },
          username: true,
          email: true,
          createdAt: true,
          id: true,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new AppError(err.message, 500);
      }
      throw new AppError('User dont exists in database', 404);
    }
  }
  async delete(id: string): Promise<void> {
    await this.findById(id);

    try {
      await prismaClient.user.delete({
        where: { id },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        throw new AppError(err.message, 500);
      }
      throw new AppError('Internal server error', 500);
    }
  }
}
