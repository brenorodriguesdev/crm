import { AlterarAreaService } from "../../../data/services/alterarArea"
import { AreaRepositoryMongo } from "../../../infra/repositories/mongo/areaRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { AlterarAreaController } from "../../../presentation/controllers/alterarArea"
import { makeAlterarAreaValidation } from "../validations/alterarArea"

export const makeAlterarAreaControler = (): Controller => {
    const areaRepositoryMongo = new AreaRepositoryMongo()
    const alterarAreaService = new AlterarAreaService(areaRepositoryMongo)
    const alterarAreaController = new AlterarAreaController(makeAlterarAreaValidation(), alterarAreaService)
    return alterarAreaController
  }