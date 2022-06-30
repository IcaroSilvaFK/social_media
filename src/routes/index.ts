import { Router } from 'express';

const router = Router();

router.post('/', (request, response) => {
  const { image } = request.body;

  return response.status(200).json({
    image,
  });
});

export { router };
