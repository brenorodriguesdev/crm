import { RetornarAreasService } from "../../../data/services/retornarAreas"
import { AreaRepositoryMongo } from "../../../infra/repositories/mongo/areaRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { RetornarAreasController } from "../../../presentation/controllers/retornarAreas"

export const makeRetornarAreasControler = (): Controller => {
    const areaRepositoryMongo = new AreaRepositoryMongo()
    const retornarAreasService = new RetornarAreasService(areaRepositoryMongo)
    const retornarAreasController = new RetornarAreasController(retornarAreasService)
    return retornarAreasController
  }