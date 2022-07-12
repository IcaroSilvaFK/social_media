import { Image } from '@prisma/client';
import { client } from '../../configs/cloudnary';
import { AppError } from '../../errors/App.error';
import { IImageReppsitory } from '../../repositories/images/interfaces/ImageRepository';
import { ImageProps } from './interfaces/Image.interface';
import { IImageService } from './interfaces/ImageService';

export class ImagesService implements IImageService {
  constructor(private readonly imagesRepository: IImageReppsitory) {}

  async create({ avatar, userId }: ImageProps): Promise<Image> {
    try {
      const urlImage = await client.uploader.upload(avatar)

      return await this.imagesRepository.create({ avatar: urlImage.secure_url , userId });
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message, err.httpStatus)
      }
      throw new AppError('Internal server Error', 500)
    }
  }
  async update(id: string, data: ImageProps): Promise<Image> {
    try {
      return await this.imagesRepository.update(id, data);
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message, err.httpStatus)
      }
      throw new AppError('Internal server Error', 500)
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await this.imagesRepository.delete(id);
    } catch (err) {
      if(err instanceof AppError){
        throw new AppError(err.message, err.httpStatus)
      }
      throw new AppError('Internal serve Error', 500)
    }
  }
}
