import { Refresh } from '@prisma/client';
import { ITokenService } from './interface/TokenService.interface';
import { IRefreshToken } from '../../repositories/refresh/interfaces/Refresh.interface';

export class TokensService implements ITokenService {
  constructor(private readonly tokenRepository: IRefreshToken) {}

  async create(id: string): Promise<Refresh> {
    try {
      return await this.tokenRepository.create(id);
    } catch (err) {
      throw new Error('');
    }
  }
  async update(id: string, token?: string | undefined): Promise<Refresh> {
    try {
      return await this.tokenRepository.update(id, token);
    } catch (err) {
      throw new Error('');
    }
  }
}
