import { AlterarSituacaoService } from "../../../data/services/alterarSituacao"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { AlterarSituacaoController } from "../../../presentation/controllers/alterarSituacao"
import { makeAlterarSituacaoValidation } from "../validations/alterarSituacao"

export const makeAlterarSituacaoControler = (): Controller => {
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const alterarSituacaoService = new AlterarSituacaoService(situacaoRepositoryMongo)
    const alterarSituacaoController = new AlterarSituacaoController(makeAlterarSituacaoValidation(), alterarSituacaoService)
    return alterarSituacaoController
  }