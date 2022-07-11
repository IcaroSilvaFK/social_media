import { Refresh } from '@prisma/client';
import { ITokenService } from './interface/TokenService.interface';
import { IRefreshToken } from '../../repositories/refresh/interfaces/Refresh.interface';
import { AppError } from '../../errors/App.error';

export class TokensService implements ITokenService {
  constructor(private readonly tokenRepository: IRefreshToken) {}

  async create(id: string): Promise<Refresh> {
    try {
      return await this.tokenRepository.create(id);
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message,err.httpStatus)
      }
      throw new AppError('Internal server error',500)
    }
  }
  async update(id: string, token?: string | undefined): Promise<Refresh> {
    try {
      return await this.tokenRepository.update(id, token);
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message,err.httpStatus)
      }
      throw new AppError('Internal server error',500)
    }
  }
}
