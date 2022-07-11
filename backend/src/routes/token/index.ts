import {Router} from 'express'
import { tokenFactory } from '../../providers/token/tokenProvider'

const tokenRouter = Router()

tokenRouter.post('/auth/refresh/token',(request, response) => {
  tokenFactory().updateToken(request, response);
})

export {
  tokenRouter
}