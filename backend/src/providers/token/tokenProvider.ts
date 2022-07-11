import {TokenController} from '../../controllers/token/Token.controller';
import {TokensService} from '../../services/token/Token.service';
import {RefreshToken} from '../../repositories/refresh/Refresh.repository'

export function tokenFactory(){
  const tokenRepository = new RefreshToken()
  const tokenSerivce = new TokensService(tokenRepository)
  const tokenController = new TokenController(tokenSerivce)

  return tokenController
}