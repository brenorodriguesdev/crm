import { RetornarDashboardService } from "../../../data/services/retornarDashboard"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { ChamadoRepositoryMongo } from "../../../infra/repositories/mongo/chamadoRepository"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { RetornarDashboardController } from "../../../presentation/controllers/retornarDashboard"

export const makeRetornarDashboardControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const chamadoRepositoryMongo = new ChamadoRepositoryMongo()
    const retornarDashboardService = new RetornarDashboardService(canalRepositoryMongo, situacaoRepositoryMongo, chamadoRepositoryMongo)
    const retornarDashboardController = new RetornarDashboardController(retornarDashboardService)
    return retornarDashboardController
  }