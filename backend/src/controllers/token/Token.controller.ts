import { Request, Response } from "express";
import { ITokenController } from "./interface/TokenController.interface";

import {ITokenService} from '../../services/token/interface/TokenService.interface'
import { AppError } from "../../errors/App.error";


export class TokenController implements ITokenController{
  
  constructor(private readonly tokenService:ITokenService){}

  async updateToken(request: Request, response: Response): Promise<Response> {
    const {userId, oldToken} = request.body
    if(!userId || !oldToken){
      return response.status(400).json({
        message: 'user or token as missing a type'
      })
    }

    try{

      const {token} = await this.tokenService.update(userId, oldToken);

      return response.status(200).json({
        token
      })

    }catch(err){
      const globalErro = (<AppError>err);
    
      return response.status(globalErro.httpStatus).json({
        message: globalErro.message,
        cause: globalErro.cause
      })
    }
  }

}