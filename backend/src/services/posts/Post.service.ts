import { Post } from '@prisma/client';
import { IPostRepository } from '../../repositories/posts/interfaces/PostsRepository.inteface';
import { IPostType } from './interface/Posts.interface';
import { IPostService } from './interface/PostsService.interface';

export class PostService implements IPostService {
  constructor(private readonly postsRepository: IPostRepository) {}

  async list(): Promise<Post[]> {
    try {
      return await this.postsRepository.list();
    } catch (err) {
      throw new Error();
    }
  }

  async create(
    user_id: string,
    { description, image_cover }: IPostType
  ): Promise<Post> {
    const data = { description, image_cover };
    try {
      return await this.postsRepository.create(user_id, data);
    } catch (err) {
      throw new Error();
    }
  }

  async update(
    post_id: string,
    { description, image_cover }: IPostType
  ): Promise<Post> {
    const data = { description, image_cover };
    try {
      return await this.postsRepository.update(post_id, data);
    } catch (err) {
      throw new Error();
    }
  }

  async delete(post_id: string): Promise<void> {
    try {
      await this.postsRepository.delete(post_id);
    } catch (err) {
      throw new Error();
    }
  }
}
