import { Post } from '@prisma/client';
import { IPostType } from './Posts.interface';

export interface IPostRepository {
  list(): Promise<Post[]>;
  create(user_id: string, data: IPostType): Promise<Post>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<IPostType>): Promise<Post>;
}
