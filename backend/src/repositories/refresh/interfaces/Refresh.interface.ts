import { Refresh } from '@prisma/client';

export interface IRefreshToken {
  update(id: string, token?: string): Promise<Refresh>;
  create(id: string): Promise<Refresh>;
}
