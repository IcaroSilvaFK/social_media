import { ImagesRepository } from '../../repositories/images/Image.repository';
import { ImagesService } from '../../services/images/Image.service';
import { ImageController } from '../../controllers/images/Image.controller';

export function ImagesFactory() {
  const imagesRepository = new ImagesRepository();
  const imagesService = new ImagesService(imagesRepository);
  const imagesController = new ImageController(imagesService);

  return imagesController;
}
