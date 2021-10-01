import { DeletarAreaService } from "../../../data/services/deletarArea"
import { AreaRepositoryMongo } from "../../../infra/repositories/mongo/areaRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { DeletarAreaController } from "../../../presentation/controllers/deletarArea"
import { makeDeletarAreaValidation } from "../validations/deletarArea"

export const makeDeletarAreaControler = (): Controller => {
    const areaRepositoryMongo = new AreaRepositoryMongo()
    const deletarAreaService = new DeletarAreaService(areaRepositoryMongo)
    const deletarAreaController = new DeletarAreaController(makeDeletarAreaValidation(), deletarAreaService)
    return deletarAreaController
  }