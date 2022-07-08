import { Request, Response } from "express";
import {decode} from 'jsonwebtoken';

import { IPostsService } from "../../services/posts/interface/PostsService.interface";
import { IPostsController } from "./interface/PostsController.interface";

interface payloadJWT{
  payload:string
}

export class PostsController implements IPostsController{
  constructor(private readonly postService:IPostsService){}

  async create(request: Request, response: Response): Promise<Response> {
    const {token} = request;
    const { userid,description,image_cover } = request.body;
    const { payload } = decode(token) as payloadJWT; //! não ta funcionando

    try{
      const newPost = await this.postService.create(userid, {description,image_cover})

      return response.status(201).json({
        post: newPost
      })
    }catch(err){
      return response.status(500).json({
        message: 'Internal server error'
      })
    }

  }
  update(request: Request, response: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  delete(request: Request, response: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  
}