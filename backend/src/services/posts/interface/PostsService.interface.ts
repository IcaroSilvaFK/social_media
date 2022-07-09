import { Post } from '@prisma/client';
import { IPostProps } from './Posts.interface';

export interface IPostService {
  list(): Promise<Post[]>;
  create(user_id: string, data: IPostProps): Promise<Post>;
  update(id: string, data: IPostProps): Promise<Post>;
  delete(id: string): Promise<void>;
}
