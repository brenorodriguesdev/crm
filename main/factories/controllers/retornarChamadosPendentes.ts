import { RetornarChamadosPendentesService } from "../../../data/services/retornarChamadosPendentes"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { CanalRepositoryMongo } from "../../../infra/repositories/mongo/canalRepository"
import { ChamadoRepositoryMongo } from "../../../infra/repositories/mongo/chamadoRepository"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { RetornarChamadosPendentesController } from "../../../presentation/controllers/retornarChamadosPendentes"
import { makeRetornarChamadosPendentesValidation } from "../validations/retornarChamadosPendentes"

export const makeRetornarChamadosPendentesControler = (): Controller => {
    const canalRepositoryMongo = new CanalRepositoryMongo()
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const chamadoRepositoryMongo = new ChamadoRepositoryMongo()
    const retornarChamadosPendentesService = new RetornarChamadosPendentesService(canalRepositoryMongo, atendenteRepositoryMongo, situacaoRepositoryMongo, chamadoRepositoryMongo)
    const retornarChamadosPendentesController = new RetornarChamadosPendentesController(makeRetornarChamadosPendentesValidation(),retornarChamadosPendentesService)
    return retornarChamadosPendentesController
  }