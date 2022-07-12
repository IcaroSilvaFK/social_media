import { User } from '@prisma/client';
import { IUserType } from './Users.types';

interface IResponseUser {
  email: string;
  _count: {
    follows: number;
  };
  createdAt: Date;
  username: string;
  id: string;
  avatar_url: {
    avatar: string;
  } | null;
}
interface ILoginUser extends IResponseUser {
  password: string;
}

interface IGetUserProps {
  _count: {
    follows: number;
  };
  avatar_url: {
    avatar: string;
  } | null;
  username: string;
  email: string;
  createdAt: Date;
  id: string;
}

export interface IUsersReposiotry {
  create(data: IUserType): Promise<IResponseUser>;
  update(id: string, data: Partial<IUserType>): Promise<User>;
  findByEmail(email: string): Promise<ILoginUser>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<IGetUserProps>;
}
