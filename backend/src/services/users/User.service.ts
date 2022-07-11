import { Refresh, User } from '@prisma/client';
import { AppError } from '../../errors/App.error';
import { compareHash } from '../../helpers/compareHash';
import { genHashPassword } from '../../helpers/genHashPassword';
import { IUsersReposiotry } from '../../repositories/users/interfaces/Users.repository.interface';
import { ITokenService } from '../token/interface/TokenService.interface';
import { IUserProps } from './interface/User.interface';
import {
  IUserService,
  LoginResponseProps,
} from './interface/UserService.interface';

export class UsersService implements IUserService {
  constructor(
    private readonly usersRepository: IUsersReposiotry,
    private readonly refreshToken: ITokenService
  ) {}
  async create(data: IUserProps): Promise<LoginResponseProps> {
    const { password, ...rest } = data;

    try {
      const passwordHashed = await genHashPassword(password);

      const newUser = await this.usersRepository.create({
        ...rest,
        password: passwordHashed,
      });

      const { token } = await this.refreshToken.create(newUser.id);

      const { password: userpassword, ...user } = newUser;
      return { user, token };
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message,err.httpStatus)
      }
      throw new AppError('Internal server error',500)
    }
  }
  async update(id: string, data: Partial<IUserProps>): Promise<User> {
    const userExists = await this.usersRepository.findById(id);
    if (!userExists) {
      throw new AppError('User dont exists in database', 404);
    }

    try {
      return await this.usersRepository.update(id, data);
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message,err.httpStatus)
      }
      throw new AppError('Internal server error',500)
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await this.usersRepository.delete(id);
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message,err.httpStatus)
      }
      throw new AppError('Internal server error',500)
    }
  }
  async login(email: string, password: string): Promise<LoginResponseProps> {
    try {
      const { password: currentPassword, ...rest } =
        await this.usersRepository.findByEmail(email);

      const { token } = await this.refreshToken.update(rest.id);

      if (!compareHash(currentPassword, password)) {
        throw new AppError('Email or password is invalid!', 401);
      }
      return { user: rest, token };
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message,err.httpStatus)
      }
      throw new AppError('Internal server error',500)
    }
  }
}
