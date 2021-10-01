import { DeletarAtendenteService } from "../../../data/services/deletarAtendente"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { DeletarAtendenteController } from "../../../presentation/controllers/deletarAtendente"
import { makeDeletarAtendenteValidation } from "../validations/deletarAtendente"

export const makeDeletarAtendenteControler = (): Controller => {
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const deletarAtendenteService = new DeletarAtendenteService(atendenteRepositoryMongo)
    const deletarAtendenteController = new DeletarAtendenteController(makeDeletarAtendenteValidation(), deletarAtendenteService)
    return deletarAtendenteController
  }