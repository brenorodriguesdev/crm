import { RetornarAtendentesService } from "../../../data/services/retornarAtendentes"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { RetornarAtendentesController } from "../../../presentation/controllers/retornarAtendentes"

export const makeRetornarAtendentesControler = (): Controller => {
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const retornarAtendentesService = new RetornarAtendentesService(atendenteRepositoryMongo)
    const retornarAtendentesController = new RetornarAtendentesController(retornarAtendentesService)
    return retornarAtendentesController
  }