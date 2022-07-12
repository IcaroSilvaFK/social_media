import { Image, Post } from '@prisma/client';
import { IPostType } from './Posts.interface';

interface IReturnListPorps{
  created_at:Date,
  description: string,
  id: string,
  image_cover: string | null,
  updated_at: Date,
  user:{
    id: string;
    username: string,
    avatar_url:{     
      avatar: string 
    } | null;
  }
}

export interface IPostRepository {
  list(): Promise<IReturnListPorps[]>;
  create(user_id: string, data: IPostType): Promise<Post>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<IPostType>): Promise<Post>;
}
