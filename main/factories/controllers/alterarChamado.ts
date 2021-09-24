import { AlterarChamadoService } from "../../../data/services/alterarChamado"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { ChamadoRepositoryMongo } from "../../../infra/repositories/mongo/chamadoRepository"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { AlterarChamadoController } from "../../../presentation/controllers/alterarChamado"
import { makeAlterarChamadoValidation } from "../validations/alterarChamado"
import { makeCriarChamadoValidation } from "../validations/criarChamado"

export const makeAlterarChamadoControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const chamadoRepositoryMongo = new ChamadoRepositoryMongo()
    const alterarChamadoService = new AlterarChamadoService(canalRepositoryMongo, situacaoRepositoryMongo, atendenteRepositoryMongo, chamadoRepositoryMongo)
    const alterarChamadoController = new AlterarChamadoController(makeAlterarChamadoValidation(), alterarChamadoService)
    return alterarChamadoController
  }