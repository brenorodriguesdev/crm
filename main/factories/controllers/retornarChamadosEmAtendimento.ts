import { RetornarChamadosEmAtendimentoService } from "../../../data/services/retornarChamadosEmAtendimento"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { ChamadoRepositoryMongo } from "../../../infra/repositories/mongo/chamadoRepository"
import { SituacaoRepositoryMongo } from "../../../infra/repositories/mongo/situacaoRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { RetornarChamadosEmAtendimentoController } from "../../../presentation/controllers/retornarChamadosEmAtendimento"

export const makeRetornarChamadosEmAtendimentoControler = (): Controller => {
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const situacaoRepositoryMongo = new SituacaoRepositoryMongo()
    const chamadoRepositoryMongo = new ChamadoRepositoryMongo()
    const retornarChamadosEmAtendimentoService = new RetornarChamadosEmAtendimentoService(situacaoRepositoryMongo, atendenteRepositoryMongo, chamadoRepositoryMongo)
    const retornarChamadosEmAtendimentoController = new RetornarChamadosEmAtendimentoController(retornarChamadosEmAtendimentoService)
    return retornarChamadosEmAtendimentoController
  }