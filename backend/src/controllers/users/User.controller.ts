import { Request, Response } from 'express';
import { AppError } from '../../errors/App.error';

import { IUserService } from '../../services/users/interface/UserService.interface';
import { IUsersController } from './interface/UsersController.interface';

export class UsersController implements IUsersController {
  constructor(private readonly usersService: IUserService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { email, password, image, username } = request.body;

    if (!email || !password || !username) {
      return response
        .status(400)
        .json({ message: 'Email or Password or Username as missing a type' });
    }

    try {
      const user = await this.usersService.create({
        email,
        password,
        image,
        username,
      });

      return response.status(201).json(user);
    } catch (err) {
      const globalError =(<AppError>err);
    
      return response.status(globalError.httpStatus).json({
        message: globalError.message
      })
    }
  }
  async update(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    const { id } = request.params;
    if (!id) {
      return response.status(404).json({
        message: 'ID is missin a type',
      });
    }

    try {
      const userUpdated = await this.usersService.update(id, data);

      return response.status(200).json(userUpdated);
    } catch (err) {
      const globalError = (<AppError>err);
    
      return response.status(globalError.httpStatus).json({
        message: globalError.message
      })
    }
  }
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!id) {
      return response.status(404).json({
        message: 'ID is missing a type',
      });
    }

    try {
      await this.usersService.delete(id);

      return response.status(200).json({
        message: 'User deleted success',
      });
    } catch (err) {
      const globalError =(<AppError>err);
    
      return response.status(globalError.httpStatus).json({
        message: globalError.message
      })
    }
  }
  async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(404).json({
        message: 'Email or Passwor as missing a type',
      });
    }

    try {
      const user = await this.usersService.login(email, password);

      return response.status(200).json(user);
    } catch (err) {
      const globalError =(<AppError>err);
    
      return response.status(globalError.httpStatus).json({
        message: globalError.message
      })
    }
  }
}
