import { Post } from '@prisma/client';
import { prismaClient } from '../../configs/prisma';
import { AppError } from '../../errors/App.error';
import { IPostRepository } from './interfaces/PostsRepository.inteface';
import { IPostType } from './interfaces/Posts.interface';

export class PostsRepository implements IPostRepository {
  async list(): Promise<Post[]> {
    try {
      return await prismaClient.post.findMany();
    } catch (err) {
      throw new Error('');
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
      throw new Error('');
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
      throw new AppError('Post dont exist anymore', 404);
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
      throw new Error();
    }
  }
}
