import { CriarSituacaoService } from "../../../data/services/criarSituacao"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { CriarSituacaoController } from "../../../presentation/controllers/criarSituacao"
import { makeCriarSituacaoValidation } from "../validations/criarSituacao"

export const makeCriarSituacaoControler = (): Controller => {
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const criarSituacaoService = new CriarSituacaoService(situacaoRepositoryMongo)
    const criarSituacaoController = new CriarSituacaoController(makeCriarSituacaoValidation(), criarSituacaoService)
    return criarSituacaoController
  }