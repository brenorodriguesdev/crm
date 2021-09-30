import { CriarAreaService } from "../../../data/services/criarArea"
import { AreaRepositoryMongo } from "../../../infra/repositories/mongo/areaRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { CriarAreaController } from "../../../presentation/controllers/criarArea"
import { makeCriarAreaValidation } from "../validations/criarArea"

export const makeCriarAreaControler = (): Controller => {
    const areaRepositoryMongo = new AreaRepositoryMongo()
    const criarAreaService = new CriarAreaService(areaRepositoryMongo)
    const criarAreaController = new CriarAreaController(makeCriarAreaValidation(), criarAreaService)
    return criarAreaController
  }