import { User } from '@prisma/client';
import { IUserProps } from './User.interface';

export interface IUserService {
  create(data: IUserProps): Promise<Partial<User>>;
  update(id: string, data: Partial<IUserProps>): Promise<Partial<User>>;
  delete(id: string): Promise<void>;
  login(email: string, password: string): Promise<Partial<User>>;
}
