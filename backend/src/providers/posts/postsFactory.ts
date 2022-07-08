import {PostsController} from '../../controllers/posts/Posts.controller';
import {PostsRepository} from '../../repositories/posts/Posts.repository';
import {PostsServices} from '../../services/posts/Posts.service'

export function postsFactory(){
  const postsRepository = new PostsRepository();
  const postsService = new PostsServices(postsRepository);
  const postsController = new PostsController(postsService);

  return postsController
}