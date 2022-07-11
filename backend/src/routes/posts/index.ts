import { Router } from 'express';
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';
import { PostsFactory } from '../../providers/posts/Posts.provider';

export const postRouter = Router();

postRouter.get('/post', (request, response) => {
  PostsFactory().list(request, response);
});
postRouter.post('/create/post', AuthMiddleware, (request, response) => {
  PostsFactory().create(request, response);
});
postRouter.put('/update/post/:id', (request, response) => {
  PostsFactory().update(request, response);
});
postRouter.delete('/delete/post/:id', (request, response) => {
  PostsFactory().delete(request, response);
});
