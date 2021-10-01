import { DeletarCanalService } from "../../../data/services/deletarCanal"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { DeletarCanalController } from "../../../presentation/controllers/deletarCanal"
import { makeDeletarCanalValidation } from "../validations/deletarCanal"

export const makeDeletarCanalControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const deletarCanalService = new DeletarCanalService(canalRepositoryMongo)
    const deletarCanalController = new DeletarCanalController(makeDeletarCanalValidation(), deletarCanalService)
    return deletarCanalController
  }