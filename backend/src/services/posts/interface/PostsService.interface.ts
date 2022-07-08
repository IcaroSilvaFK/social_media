import { Post } from "@prisma/client";

export type PostType = Pick<Post, 'description'| 'image_cover'>

export interface IPostsService{
  create(userId: string,post:PostType): Promise<Post>;
  update(postId:string, updatedPost:PostType): Promise<Post>;
  delete(postId:string): Promise<void>;
}