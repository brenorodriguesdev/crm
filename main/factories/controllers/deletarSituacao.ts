import { DeletarSituacaoService } from "../../../data/services/deletarSituacao"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { DeletarSituacaoController } from "../../../presentation/controllers/deletarSituacao"
import { makeDeletarSituacaoValidation } from "../validations/deletarSituacao"

export const makeDeletarSituacaoControler = (): Controller => {
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const seletarSituacaoService = new DeletarSituacaoService(situacaoRepositoryMongo)
    const deletarSituacaoController = new DeletarSituacaoController(makeDeletarSituacaoValidation(), seletarSituacaoService)
    return deletarSituacaoController
  }