import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';
import { PostsFactory } from '../../providers/posts/Posts.provider';

export const postRouter = Router();

postRouter.get('/auth/post', (request, response) => {
  PostsFactory().list(request, response);
});

postRouter.post('/auth/post', AuthMiddleware, (request, response) => {
  PostsFactory().create(request, response);
});
postRouter.put('/auth/post/:id', (request, response) => {
  PostsFactory().update(request, response);
});
postRouter.delete('/auth/post/:id', (request, response) => {
  PostsFactory().delete(request, response);
});
