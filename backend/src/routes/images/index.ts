import { Router } from 'express';
import { ImagesFactory } from '../../providers/image/Image.provider';

const imagesRouter = Router();

imagesRouter.post('/user/image', (request, response) => {
  ImagesFactory().create(request, response);
});

imagesRouter.put('/user/image/:id', (request, response) => {
  ImagesFactory().update(request, response);
});

imagesRouter.delete('/user/image', (request, response) => {
  ImagesFactory().delete(request, response);
});

export { imagesRouter };
