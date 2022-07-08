import { Post } from "@prisma/client";

export type PostType = Pick<Post, 'description'| 'image_cover'>

export interface IPostsRepository{
  create(userId:string, post:PostType): Promise<Post>;
  update(id:string, data:Partial<PostType>): Promise<Post>;
  delete(postId:string): Promise<void>;

}