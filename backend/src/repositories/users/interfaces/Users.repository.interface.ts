import { User } from '@prisma/client';
import { IUserType } from './Users.types';

export interface IUsersReposiotry {
  create(data: IUserType): Promise<User>;
  update(id: string, data: Partial<IUserType>): Promise<User>;
  findByEmail(email: string): Promise<User>;
  delete(id: string): Promise<void>;
  findOne(id: string): Promise<User>;
}
