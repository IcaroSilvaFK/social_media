import { Refresh } from '@prisma/client';
import { prismaClient } from '../../configs/prisma';
import { AppError } from '../../errors/App.error';
import { genToken } from '../../helpers/genToken';
import { IRefreshToken } from './interfaces/Refresh.interface';

export class RefreshToken implements IRefreshToken {
  async create(id: string): Promise<Refresh> {
    return await prismaClient.refresh.create({
      data: {
        userId: id,
        token: genToken({ payload: id }),
      },
    });
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

    return await prismaClient.refresh.update({
      where: {
        id: existsUserInRefresh.id,
      },
      data: {
        token: genToken({ payload: existsUserInRefresh.id }),
      },
    });
  }
}
