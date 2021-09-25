import { ChecarPermissaoService } from "../../../data/services/checarPermissao"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { Middleware } from "../../../presentation/contracts/middleware"
import { ChecarPermissaoMiddleware } from "../../../presentation/middlewares/checarPermissao"

export const makeAutenticarMiddleware = (): Middleware => {
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const checarPermissaoService = new ChecarPermissaoService(atendenteRepositoryMongo)
    const checarPermissaoMiddleware = new ChecarPermissaoMiddleware(checarPermissaoService)
    return checarPermissaoMiddleware
  }