import {Router} from 'express'

import { tokenFactory } from '../../providers/token/tokenProvider'
import {AuthMiddleware} from '../../middlewares/AuthMiddleware'

const tokenRouter = Router()

tokenRouter.post('/auth/refresh/token',AuthMiddleware,(request, response) => {
  tokenFactory().updateToken(request, response);
})

export {
  tokenRouter
}