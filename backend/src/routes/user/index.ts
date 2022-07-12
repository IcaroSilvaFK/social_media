import { Router } from 'express';
import { UsersFactory } from '../../providers/user/User.provider';

const usersRouter = Router();

usersRouter.post('/user', (request, response) => {
  UsersFactory().create(request, response);
});

usersRouter.post('/user/login', (request, response) => {
  UsersFactory().login(request, response);
});

usersRouter.get('/user/:id', (request, response) => {
  UsersFactory().getUser(request, response);
});

export { usersRouter };
