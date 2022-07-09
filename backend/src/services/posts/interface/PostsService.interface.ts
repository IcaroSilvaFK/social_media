import { Post } from '@prisma/client';
import { IPostType } from './Posts.interface';

export interface IPostService {
  list(): Promise<Post[]>;
  create(user_id: string, post: IPostType): Promise<Post>;
  update(post_id: string, updatedPost: IPostType): Promise<Post>;
  delete(post_id: string): Promise<void>;
}
