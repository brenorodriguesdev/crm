import { RetornarCanaisService } from "../../../data/services/retornarCanais"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { RetornarCanaisController } from "../../../presentation/controllers/retornarCanais"

export const makeRetornarCanaisControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const retornarCanaisService = new RetornarCanaisService(canalRepositoryMongo)
    const retornarCanaisController = new RetornarCanaisController(retornarCanaisService)
    return retornarCanaisController
  }