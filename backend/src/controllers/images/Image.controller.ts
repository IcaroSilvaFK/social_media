import { Request, Response } from 'express';
import { IImageController } from './interface/ImageController.interface';
import { IImageService } from '../../services/images/interfaces/ImageService';

export class ImageController implements IImageController {
  constructor(private readonly imagesService: IImageService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { userId, avatar } = request.body;

    if (!userId || !avatar) {
      return response.status(400).json({
        message: 'userId or avatar as missing a type',
      });
    }

    try {
      await this.imagesService.create({ userId, avatar });

      return response.status(201).json({
        status: 'created',
      });
    } catch (err) {
      throw new Error();
    }
  }
  async update(request: Request, response: Response): Promise<Response> {
    const { data } = request.body;
    const { id } = request.params;
    if (!id || !data) {
      return response.status(400);
    }

    try {
      await this.imagesService.update(id, data);

      return response.status(200).json({
        message: 'Image updated',
      });
    } catch (err) {
      throw new Error();
    }
  }
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    if (!id) {
      return response.status(400);
    }

    try {
      await this.imagesService.delete(id);

      return response.status(200).json({
        message: 'Image deleted',
      });
    } catch (err) {
      throw new Error();
    }
  }
}