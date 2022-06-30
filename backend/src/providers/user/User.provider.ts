import { UsersRepository } from '../../repositories/users/Users.repository';
import { UsersService } from '../../services/users/User.service';
import { UsersController } from '../../controllers/users/User.controller';

function UsersFactory() {
  const usersRepository = new UsersRepository();
  const usersService = new UsersService(usersRepository);
  const usersController = new UsersController(usersService);

  return usersController;
}

export { UsersFactory };
