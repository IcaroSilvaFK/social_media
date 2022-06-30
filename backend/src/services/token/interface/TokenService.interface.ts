import { Refresh } from '@prisma/client';

export interface ITokenService {
  create(id: string): Promise<Refresh>;
  update(id: string, token?: string): Promise<Refresh>;
}
