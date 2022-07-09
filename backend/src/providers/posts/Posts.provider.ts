import { PostService } from "../../services/posts/Post.service";
import { PostsRepository } from "../../repositories/posts/Posts.repository";
import { PostsController } from "../../controllers/posts/Posts.controller";

export function PostsFactory(){
  const postsRepository = new PostsRepository()
  const postService = new PostService(postsRepository)
  const postController = new PostsController(postService)

  return postController
}