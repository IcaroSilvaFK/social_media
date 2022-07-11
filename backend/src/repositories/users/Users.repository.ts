import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
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
      if(err instanceof PrismaClientKnownRequestError){
        switch (err.code){
          case 'P2002': {
            throw new AppError('Unique constraint failed',500)
          }
          case 'P2005':{
            throw new AppError('The value stored in the database is invalid for the field\'s type',500)
          }
          case 'P2007':{
            throw new AppError('Data validation error',500)
          }
          default:{
            throw new AppError(err.message,500)
          }
        }
      }
      throw new AppError('Internal server error',500);
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
      if(err instanceof PrismaClientKnownRequestError){
        switch(err.code){
          case 'P2007':{
            throw new AppError('Data validation error ', 500);
          }
          case 'P2009':{
            throw new AppError('Failed to validate the query',500)
          }
          case 'P2010':{
            throw new AppError("Raw query failed",500)
          }
          case 'P2025':{
            throw new AppError("An operation failed because it depends on one or more records that were required but not found",500)
          }
          default:{
            throw new AppError(err.message,500)
          }
        }
      }
      throw new AppError('Internal server error',500);
    }
  }
  async findByEmail(email: string): Promise<User> {
    try {
      return await prismaClient.user.findFirstOrThrow({
        where: {
          email,
        },
      });
    } catch (err) {
      if(err instanceof PrismaClientKnownRequestError){
        throw new AppError(err.message,500)
      }
      throw new AppError('User does not exist',400)
    }
  }
  async findById(id: string): Promise<User> {
    try {
      return await prismaClient.user.findFirstOrThrow({
        where: {
          id,
        },
      });
    } catch (err) {
      if(err instanceof PrismaClientKnownRequestError){
        throw new AppError(err.message,500)
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
      if(err instanceof PrismaClientKnownRequestError){
        throw new AppError(err.message,500)
      }
      throw new AppError('Internal server error',500);
    }
  }
}
