import { Router } from 'express';

import { UsersFactory } from '../providers/user/User.provider';

const router = Router();

router.post('/', (request, response) => {
  const { image } = request.body;

  return response.status(200).json({
    image,
  });
});

router.post('/auth/user/create', (request, response) => {
  UsersFactory().create(request, response);
});

export { router };
