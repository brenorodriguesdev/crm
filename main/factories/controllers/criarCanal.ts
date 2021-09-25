import { CriarCanalService } from "../../../data/services/criarCanal"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { CriarCanalController } from "../../../presentation/controllers/criarCanal"
import { makeCriarCanalValidation } from "../validations/criarCanal"

export const makeCriarCanalControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const criarCanalService = new CriarCanalService(canalRepositoryMongo)
    const criarCanalController = new CriarCanalController(makeCriarCanalValidation(), criarCanalService)
    return criarCanalController
  }