import { Post } from "@prisma/client";
import { IPostsRepository } from "../../repositories/posts/interface/PostsReposiotry.interface";
import { IPostsService, PostType } from "./interface/PostsService.interface";



export class PostsServices implements IPostsService {
  constructor(private readonly postsRepository:IPostsRepository){}
  async create(userId: string, {description,image_cover}: PostType): Promise<Post> {
    try{
   
      return await this.postsRepository.create(userId,{description,image_cover})
    }catch(err){
      throw new Error('')
    }
  }
  async update(postId: string, updatedPost: PostType): Promise<Post> {
    try{
      return await this.postsRepository.update(postId,updatedPost )
    }catch(err){
      throw new Error('')
    }
  }
  async delete(postId: string): Promise<void> {
    try{

      await this.postsRepository.delete(postId)
    }catch(err){
      throw new Error('')
    }
  }
}