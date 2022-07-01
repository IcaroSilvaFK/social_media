import { Router } from 'express';
import { UsersFactory } from '../../providers/user/User.provider';

const usersRouter = Router();

usersRouter.post('/auth/user/create', (request, response) => {
  UsersFactory().create(request, response);
});

usersRouter.post('/auth/user/login', (request, response) => {
  UsersFactory().login(request, response);
});

export { usersRouter };
