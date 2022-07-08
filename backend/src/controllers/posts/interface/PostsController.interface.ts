import { Request, Response } from "express";

export interface IPostsController{
  create(request:Request, response:Response) : Promise<Response>;
  update(request:Request, response:Response) : Promise<Response>;
  delete(request:Request, response:Response) : Promise<Response>;
}