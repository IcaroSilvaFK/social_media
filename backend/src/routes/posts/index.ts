import {Router} from 'express';
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';
import { postsFactory } from '../../providers/posts/postsFactory';

const postsRouter = Router();

postsRouter.post('/app/posts/create',AuthMiddleware, (request,response) => {
  postsFactory().create(request,response)
})


export {
  postsRouter
}