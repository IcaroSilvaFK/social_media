import { Image } from '@prisma/client';
import { ImageProps } from './Image.interface';

export interface IImageService {
  create(data: ImageProps): Promise<Image>;
  update(id: string, data: ImageProps): Promise<Image>;
  delete(id: string): Promise<void>;
}
