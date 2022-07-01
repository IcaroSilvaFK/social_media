import { Image } from '@prisma/client';
import { prismaClient } from '../../configs/prisma';
import { ImageProps } from './interfaces/Image.interface';
import { IImageReppsitory } from './interfaces/ImageRepository';

export class ImagesRepository implements IImageReppsitory {
  async create(data: ImageProps): Promise<Image> {
    try {
      return await prismaClient.image.create({
        data: data,
      });
    } catch (err) {
      throw new Error();
    }
  }
  async update(id: string, data: Partial<ImageProps>): Promise<Image> {
    try {
      return await prismaClient.image.update({
        where: {
          userId: id,
        },
        data: {
          avatar: data.avatar,
        },
      });
    } catch (err) {
      throw new Error();
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
      throw new Error();
    }
  }
}
