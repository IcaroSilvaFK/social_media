import { Image } from '@prisma/client';
import { IImageReppsitory } from '../../repositories/images/interfaces/ImageRepository';
import { ImageProps } from './interfaces/Image.interface';
import { IImageService } from './interfaces/ImageService';

export class ImagesService implements IImageService {
  constructor(private readonly imagesRepository: IImageReppsitory) {}

  async create(data: ImageProps): Promise<Image> {
    try {
      return await this.imagesRepository.create(data);
    } catch (err) {
      throw new Error();
    }
  }
  async update(id: string, data: ImageProps): Promise<Image> {
    try {
      return await this.imagesRepository.update(id, data);
    } catch (err) {
      throw new Error();
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await this.imagesRepository.delete(id);
    } catch (err) {
      throw new Error();
    }
  }
}
