import { RetornarSituacoesService } from "../../../data/services/retornarSituacoes"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { RetornarSituacoesController } from "../../../presentation/controllers/retornarSituacoes"

export const makeRetornarSituacoesControler = (): Controller => {
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const retornarSituacoesService = new RetornarSituacoesService(situacaoRepositoryMongo)
    const retornarSituacoesController = new RetornarSituacoesController(retornarSituacoesService)
    return retornarSituacoesController
  }