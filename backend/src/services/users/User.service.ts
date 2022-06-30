import { User } from '@prisma/client';
import { AppError } from '../../errors/App.error';
import { compareHash } from '../../helpers/compareHash';
import { genHashPassword } from '../../helpers/genHashPassword';
import { IUsersReposiotry } from '../../repositories/users/interfaces/Users.repository.interface';
import { IUserProps } from './interface/User.interface';
import { IUserService } from './interface/UserService.interface';

export class UsersService implements IUserService {
  constructor(private readonly usersRepository: IUsersReposiotry) {}
  async create(data: IUserProps): Promise<Partial<User>> {
    const { password, ...rest } = data;

    try {
      const passwordHashed = await genHashPassword(password);

      const newUser = await this.usersRepository.create({
        ...rest,
        password: passwordHashed,
      });

      const { password: userpassword, ...user } = newUser;

      return user;
    } catch (err) {
      throw new AppError('', 400);
    }
  }
  async update(id: string, data: Partial<IUserProps>): Promise<User> {
    const userExists = await this.usersRepository.findOne(id);
    if (!userExists) {
      throw new AppError('User dont exists in database', 404);
    }

    try {
      return await this.usersRepository.update(id, data);
    } catch (err) {
      throw new AppError('', 500);
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await this.usersRepository.delete(id);
    } catch (err) {
      throw new AppError('', 111);
    }
  }
  async login(email: string, password: string): Promise<Partial<User>> {
    try {
      const { password: currentPassword, ...rest } =
        await this.usersRepository.findByEmail(email);
      if (!compareHash(currentPassword, password)) {
        throw new AppError('Email or password is invalid!', 401);
      }

      return rest;
    } catch (err) {
      throw new AppError('', 4);
    }
  }
}
