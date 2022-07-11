import { Post } from '@prisma/client';
import { prismaClient } from '../../configs/prisma';
import { AppError } from '../../errors/App.error';
import { IPostRepository } from './interfaces/PostsRepository.inteface';
import { IPostType } from './interfaces/Posts.interface';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export class PostsRepository implements IPostRepository {
  async list(): Promise<Post[]> {
    try {
      return await prismaClient.post.findMany();
    } catch (err) {
      if(err instanceof PrismaClientKnownRequestError){
        switch (err.code) {
          case 'P2002':{
            throw new AppError('Unique constraint failed',500)
          }
          case 'P2003' :{
            throw new AppError('Foreign key constraint failed',500)
          }
          default :{
            throw new AppError(err.message, 500)
          }
        }
      }
      throw new AppError('Internal server Error', 500)
    }
  }

  async create(user_id: string, { description, image_cover }: IPostType): Promise<Post> {
    try {
      return await prismaClient.post.create({
        data: {
          userId: user_id,
          description,
          image_cover,
        },
      });
    } catch (err) {
      if(err instanceof PrismaClientKnownRequestError){
        switch(err.code){
          case 'P2002':{
            throw new AppError('Unique constraint failed',500)
          }
          case 'P2003' :{
            throw new AppError('Foreign key constraint failed',500)
          }
          case 'P2012':{
            throw new AppError("Missing a required value", 500)
          }
          case 'P2013':{
            throw new AppError('Missing the required argument',400)
          }
          case 'P2014':{
            throw new AppError('The change you are trying to make would violate the required relation t',400)
          }
          default:{
            throw new AppError(err.message, 500)
          }
        }
      }
      throw new AppError('Internal server error', 500)
    }
  }

  async update(id: string, { description, image_cover }: Partial<IPostType>): Promise<Post> {
    try {
      return await prismaClient.post.update({
        where: {
          id,
        },
        data: {
          description,
          image_cover,
        },
      });
    } catch (err) {
      if(err instanceof PrismaClientKnownRequestError){
        switch(err.code){
          case 'P2002':{
            throw new AppError('Unique constraint failed',500)
          }
          case 'P2003' :{
            throw new AppError('Foreign key constraint failed',500)
          }
          case 'P2012':{
            throw new AppError("Missing a required value", 500)
          }
          default:{
            throw new AppError(err.message, 500)
          }
        }
      } 
      throw new AppError('Internal server error', 500)
    }
  }

  async delete(id: string): Promise<void> {
    await prismaClient.post.findFirstOrThrow({
      where: { id },
    });

    try {
      await prismaClient.post.delete({
        where: { id },
      });
    } catch (err) {
      if(err instanceof PrismaClientKnownRequestError){
        throw new AppError(err.message, 500)
      }
      throw new AppError('Internal server error', 500)
    }
  }
}
