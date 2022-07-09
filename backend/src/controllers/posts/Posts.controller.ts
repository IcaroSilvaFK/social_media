import { Request, Response } from 'express';

import { IPostService } from '../../services/posts/interface/PostsService.interface';
import { IPostController } from './interface/PostsController.interface';

export class PostsController implements IPostController {
  constructor(private readonly postService: IPostService) {}

  async list(request: Request, response: Response): Promise<Response> {
    try {
      const posts = await this.postService.list();

      if (!posts) {
        return response.status(204).json({ message: 'There are no post yet' });
      }

      return response.status(200).json(posts);
    } catch (err) {
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { description, image_cover } = request.body;
    const userId = response.user_id;

    if (!description) {
      return response
        .status(400)
        .json({ message: 'Please insert an description to post' });
    }

  

    try {
      const data = { description, image_cover };

      const post = await this.postService.create(userId!, data);

      return response.status(201).json(post);
    } catch (err) {
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    if (!id) {
      return response.status(404).json({
        message: 'ID is missing a type',
      });
    }

    try {
      await this.postService.delete(id);
      return response.status(200).json({
        message: 'Post deleted success',
      });
    } catch (err) {
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { description, image_cover } = request.body;
    const { id } = request.params;

    if (!description || !image_cover) {
      return response.status(400).json({
        message: 'Please insert an description or image to update a post',
      });
    }

    try {
      const data = { description, image_cover };
      const postUpdated = await this.postService.update(id, data);

      return response.status(200).json(postUpdated);
    } catch (err) {
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}
