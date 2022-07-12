import { Image } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { prismaClient } from '../../configs/prisma';
import { AppError } from '../../errors/App.error';
import { ImageProps } from './interfaces/Image.interface';
import { IImageReppsitory } from './interfaces/ImageRepository';

export class ImagesRepository implements IImageReppsitory {
  async create({ avatar, userId }: ImageProps): Promise<Image> {
    try {
      return await prismaClient.image.create({
        data: {
          avatar,
          userId,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2002': {
            throw new AppError(
              'There is a unique constraint violation, a new user cannot be created with this email',
              500
            );
          }
          case 'P2003': {
            throw new AppError('Foreign key constraint failed', 500);
          }
          case 'P2005': {
            throw new AppError(
              "The value stored in the database for the field is invalid for the field's type",
              500
            );
          }
          default: {
            throw new AppError(err.message, 500);
          }
        }
      }
      throw new AppError('Internal Server error', 500);
    }
  }
  async update(id: string, data: string): Promise<Image> {
    try {
      return await prismaClient.image.update({
        where: {
          userId: id,
        },
        data: {
          avatar: data,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2002': {
            throw new AppError(
              'There is a unique constraint violation, a new user cannot be created with this email',
              500
            );
          }
          case 'P2025': {
            throw new AppError(
              'An operation failed because it depends on one or more records that were required but not found. {cause}',
              500
            );
          }
          case 'P2005': {
            throw new AppError(
              "The value stored in the database for the field is invalid for the field's type",
              500
            );
          }

          default: {
            throw new AppError(err.message, 500);
          }
        }
      }
      throw new AppError('Internal Server error', 500);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await prismaClient.image.delete({
        where: {
          userId: id,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P2027': {
            throw new AppError(
              'Multiple errors occurred on the database during query execution',
              500
            );
          }
          case 'P2019': {
            throw new AppError(`Input error ${err.cause}`, 500);
          }
          default: {
            throw new AppError(err.message, 500);
          }
        }
      }
      throw new AppError('Internal Server error', 500);
    }
  }
}
