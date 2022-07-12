import { Image } from '@prisma/client';
import { ImageProps } from './Image.interface';

export interface IImageReppsitory {
  create(data: ImageProps): Promise<Image>;
  update(id: string, data: string): Promise<Image>;
  delete(id: string): Promise<void>;
}
