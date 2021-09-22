import { DashboardModel, DetalheCanal, DetalheSituacao } from "../../domain/models/dashboard";
import { RetornarDashboardUseCase } from "../../domain/useCases/retornarDashboard";
import { CanalRepository } from "../contracts/canalRepository";
import { ChamadoRepository } from "../contracts/chamadoRepository";
import { SituacaoRepository } from "../contracts/situacaoRepository";

export class RetornarDashboardService implements RetornarDashboardUseCase {
    constructor(private readonly canalRepository: CanalRepository,
        private readonly situacaoRepository: SituacaoRepository,
        private readonly chamadoRepository: ChamadoRepository) { }
    async retornar(): Promise<DashboardModel> {
        const canais = await this.canalRepository.getAll()
        const situacoes = await this.situacaoRepository.getAll()
        const totalChamados = await this.chamadoRepository.getCount()
        let detalhesSituacoes: DetalheSituacao[] = []
        let detalhesCanais: DetalheCanal[] = []
        for (let canal of canais) {
            const totalChamadosCanal = await this.chamadoRepository.getCountByCanal(canal)
            let detalheCanal: DetalheCanal 
            detalheCanal.canal = canal
            detalheCanal.total = totalChamadosCanal
            for (let situacao of situacoes) {
                const totalChamadosCanalAndSituacao = await this.chamadoRepository.getCountByCanalAndSituacao(canal, situacao)
                let detalheSituacao: DetalheSituacao
                detalheSituacao.situacao = situacao
                detalheSituacao.total = totalChamadosCanalAndSituacao
                detalheCanal.detalhesSituacoes.push(detalheSituacao)
            }
            detalhesCanais.push(detalheCanal)
        }

        for (let situacao of situacoes) {
            const totalChamadoSituacao = await this.chamadoRepository.getCountBySituacao(situacao)
            let detalheSituacao: DetalheSituacao
            detalheSituacao.situacao = situacao
            detalheSituacao.total = totalChamadoSituacao
            detalhesSituacoes.push(detalheSituacao)
        }

        return {
            total: totalChamados,
            detalhesSituacoes,
            detalhesCanais
        }
         
    }
}