import { Request, Response } from "express";

export interface ITokenController{
  updateToken(request:Request, response:Response):Promise<Response>
}