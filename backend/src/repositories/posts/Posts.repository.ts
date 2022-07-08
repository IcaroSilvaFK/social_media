import { Post } from "@prisma/client";
import { IPostsRepository, PostType } from "./interface/PostsReposiotry.interface";

import {prismaClient} from '../../configs/prisma'


export class PostsRepository implements IPostsRepository{
  async create(userId: string, {description,image_cover}: PostType): Promise<Post> {
    try{
      console.log(String(userId))
      return await prismaClient.post.create({
        data:{
          userId: userId,
          description,
        }
      }) 

    }catch(err){
      throw new Error('')
    }
  }
  async update(postId: string, data: Partial<PostType>): Promise<Post> {
    try{

      return await prismaClient.post.update({
        where:{
          id:postId,
        },data: data
      })

    }catch(err){
      throw new Error('')
    }
  }
  async delete(postId: string): Promise<void> {
    try{
      await prismaClient.post.delete({
        where: {
          id: postId
        }
      })
    }catch(err){
      throw new Error('')
    }
  }

  

}