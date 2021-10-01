import { AlterarCanalService } from "../../../data/services/alterarCanal"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { AlterarCanalController } from "../../../presentation/controllers/alterarCanal"
import { makeAlterarCanalValidation } from "../validations/alterarCanal"

export const makeAlterarCanalControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const alterarCanalService = new AlterarCanalService(canalRepositoryMongo)
    const alterarCanalController = new AlterarCanalController(makeAlterarCanalValidation(), alterarCanalService)
    return alterarCanalController
  }