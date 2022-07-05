import { AppError } from '../../errors/App.error';
import { Post } from '@prisma/client';
import { IPostRepository } from '../../repositories/posts/interfaces/PostsRepository.inteface';
import { IPostProps } from './interface/Posts.interface';
import { IPostService } from './interface/PostsService.interface';

export class PostService implements IPostService {
  constructor(private readonly postsRepository: IPostRepository) {}

  async create(user_id: string, data: IPostProps): Promise<Post> {
    try {
      return await this.postsRepository.create(user_id, data);
    } catch (err) {
      throw new Error();
    }
  }

  async update(id: string, data: IPostProps): Promise<Post> {
    try {
      return await this.postsRepository.update(id, data);
    } catch (err) {
      throw new Error();
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.postsRepository.delete(id);
    } catch (err) {
      throw new Error();
    }
  }
}
