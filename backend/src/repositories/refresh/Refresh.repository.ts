import { Refresh } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { prismaClient } from '../../configs/prisma';
import { AppError } from '../../errors/App.error';
import { genToken } from '../../helpers/genToken';
import { IRefreshToken } from './interfaces/Refresh.interface';

export class RefreshToken implements IRefreshToken {
  async create(id: string): Promise<Refresh> {
    try{
      return await prismaClient.refresh.create({
        data: {
          userId: id,
          token: genToken({ payload: id }),
        },
      });
    }catch(err){

      if(err instanceof PrismaClientKnownRequestError){
        switch(err.code){
          case 'P2011':{
            throw new AppError('Null constraint violation',500)
          }
          case 'P2007':{
            throw new AppError('Data validation error',500)
          }
          case 'P2004':{
            throw new AppError('A constraint failed on the database',500) 
          }
          case 'P2003':{
            throw new AppError('Foreign key constraint failed',500)
          }
          case 'P2002':{
            throw new AppError('Unique constraint failed on the',500)
          }
          default :{
            throw new AppError(err.message, 500)
          }
        }
      }
      throw new AppError('Internal server error',500)
      
    }
  }
  async update(id: string, token?: string): Promise<Refresh> {
    const existsUserInRefresh = await prismaClient.refresh.findFirst({
      where: { userId: id },
    });

    if (!existsUserInRefresh) {
      throw new AppError('User or token invalid', 401);
    }

    if (token && existsUserInRefresh.token !== token) {
      throw new AppError('User or token invalid', 401);
    }

    try{
      return await prismaClient.refresh.update({
        where: {
          id: existsUserInRefresh.id,
        },
        data: {
          token: genToken({ payload: existsUserInRefresh.id }),
        },
      });
    }catch(err){
      if(err instanceof PrismaClientKnownRequestError){
        switch(err.code){
          case 'P2011':{
            throw new AppError('Null constraint violation',500)
          }
          case 'P2007':{
            throw new AppError('Data validation error',500)
          }
          case 'P2004':{
            throw new AppError('A constraint failed on the database',500) 
          }
          case 'P2003':{
            throw new AppError('Foreign key constraint failed',500)
          }
          case 'P2002':{
            throw new AppError('Unique constraint failed on the',500)
          }
          default :{
            throw new AppError(err.message, 500)
          }
        }
      }
      throw new AppError('Internal server error',500)
    }
  }
}
