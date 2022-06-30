import { Refresh, User } from '@prisma/client';
import { IUserProps } from './User.interface';

export type LoginResponseProps = {
  user: Partial<User>;
  token: string;
};

export interface IUserService {
  create(data: IUserProps): Promise<LoginResponseProps>;
  update(id: string, data: Partial<IUserProps>): Promise<Partial<User>>;
  delete(id: string): Promise<void>;
  login(email: string, password: string): Promise<LoginResponseProps>;
}
