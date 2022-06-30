import { UsersRepository } from '../../repositories/users/Users.repository';
import { UsersService } from '../../services/users/User.service';
import { UsersController } from '../../controllers/users/User.controller';
import { RefreshToken } from '../../repositories/refresh/Refresh.repository';
import { TokensService } from '../../services/token/Token.service';

function UsersFactory() {
  const usersRepository = new UsersRepository();
  const usersRefreshToken = new RefreshToken();
  const usersRefreshTokenService = new TokensService(usersRefreshToken);
  const usersService = new UsersService(
    usersRepository,
    usersRefreshTokenService
  );
  const usersController = new UsersController(usersService);

  return usersController;
}

export { UsersFactory };
