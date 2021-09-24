import { CriarChamadoService } from "../../../data/services/criarChamado"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { ChamadoRepositoryMongo } from "../../../infra/repositories/mongo/chamadoRepository"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { CriarChamadoController } from "../../../presentation/controllers/criarChamado"
import { makeCriarChamadoValidation } from "../validations/criarChamado"

export const makeCriarChamadoControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const chamadoRepositoryMongo = new ChamadoRepositoryMongo()
    const criarChamadoService = new CriarChamadoService(canalRepositoryMongo, situacaoRepositoryMongo, atendenteRepositoryMongo, chamadoRepositoryMongo)
    const criarChamadoController = new CriarChamadoController(makeCriarChamadoValidation(), criarChamadoService)
    return criarChamadoController
  }