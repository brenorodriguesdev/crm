import { DeletarCanalService } from "../../../data/services/deletarCanal"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { DeletarCanalController } from "../../../presentation/controllers/deletarCanal"
import { makeDeletarCanalValidation } from "../validations/deletarCanal"

export const makeDeletarCanalControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const criarDeletarService = new DeletarCanalService(canalRepositoryMongo)
    const criarDeletarController = new DeletarCanalController(makeDeletarCanalValidation(), criarDeletarService)
    return criarDeletarController
  }