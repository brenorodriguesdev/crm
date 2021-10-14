import { AdicionarAnexoService } from "../../../data/services/adicionarAnexo"
import { AnexoChamadoRepositoryMongo } from "../../../infra/repositories/mongo/anexoChamadoRepository"
import { ChamadoRepositoryMongo } from "../../../infra/repositories/mongo/chamadoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { AdicionarAnexoController } from "../../../presentation/controllers/adicionarAnexo"
import { makeAdicionarAnexoValidation } from "../validations/adicionarAnexo"

export const makeAdicionarAnexoControler = (): Controller => {
    const chamadoRepositoryMongo = new ChamadoRepositoryMongo()
    const anexoChamadoRepositoryMongo = new AnexoChamadoRepositoryMongo()
    const adicionarAnexoService = new AdicionarAnexoService(chamadoRepositoryMongo, anexoChamadoRepositoryMongo)
    const adicionarAnexoController = new AdicionarAnexoController(makeAdicionarAnexoValidation(), adicionarAnexoService)
    return adicionarAnexoController
  }