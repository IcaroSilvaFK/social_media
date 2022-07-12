import { Post } from '@prisma/client';
import { IPostType } from './Posts.interface';

interface IReturnListPorps {
  created_at: Date;
  description: string;
  id: string;
  image_cover: string | null;
  updated_at: Date;
  user: {
    id: string;
    username: string;
    avatar_url: {
      avatar: string;
    } | null;
  };
}
export interface IPostService {
  list(): Promise<IReturnListPorps[]>;
  create(user_id: string, post: IPostType): Promise<Post>;
  update(post_id: string, updatedPost: IPostType): Promise<Post>;
  delete(post_id: string): Promise<void>;
}
