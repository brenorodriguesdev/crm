import { AutenticarService } from "../../../data/services/autenticar"
import { Jwt } from "../../../infra/cryptography/jwt/jwt"
import { Middleware } from "../../../presentation/contracts/middleware"
import { AutenticarMiddleware } from "../../../presentation/middlewares/autenticar"
import env from "../../config/env"

export const makeAutenticarMiddleware = (): Middleware => {
    const jwt = new Jwt(env.secretKey)
    const autenticarService = new AutenticarService(jwt)
    const autenticarMiddleware = new AutenticarMiddleware(autenticarService)
    return autenticarMiddleware
  }