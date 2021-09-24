import { AtenderChamadoService } from "../../../data/services/atenderChamado"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { ChamadoRepositoryMongo } from "../../../infra/repositories/mongo/chamadoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { AtenderChamadoController } from "../../../presentation/controllers/atenderChamado"
import { makeAtenderChamadoValidation } from "../validations/atenderChamado"

export const makeAtenderChamadoControler = (): Controller => {
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const chamadoRepositoryMongo = new ChamadoRepositoryMongo()
    const atenderChamadoService = new AtenderChamadoService(chamadoRepositoryMongo, atendenteRepositoryMongo)
    const atenderChamadoController = new AtenderChamadoController(makeAtenderChamadoValidation(), atenderChamadoService)
    return atenderChamadoController
  }