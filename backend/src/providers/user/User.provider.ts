import { UsersRepository } from '../../repositories/users/Users.repository';
import { UsersService } from '../../services/users/User.service';
import { UsersController } from '../../controllers/users/User.controller';
import { RefreshToken } from '../../repositories/refresh/Refresh.repository';

function UsersFactory() {
  const usersRepository = new UsersRepository();
  const usersRefreshToken = new RefreshToken();
  const usersService = new UsersService(usersRepository, usersRefreshToken);
  const usersController = new UsersController(usersService);

  return usersController;
}

export { UsersFactory };
