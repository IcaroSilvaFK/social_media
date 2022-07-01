import { Router } from 'express';
import { ImagesFactory } from '../../providers/image/Image.provider';

const imagesRouter = Router();

imagesRouter.post('/user/image/create', (request, response) => {
  ImagesFactory().create(request, response);
});

imagesRouter.put('/user/image/create/:id', (request, response) => {
  ImagesFactory().update(request, response);
});

imagesRouter.delete('/user/image/create', (request, response) => {
  ImagesFactory().delete(request, response);
});

export { imagesRouter };
