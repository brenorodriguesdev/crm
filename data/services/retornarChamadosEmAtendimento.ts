import { ChamadoModel } from "../../domain/models/chamado";
import { RetornarChamadosEmAtendimentoUseCase } from "../../domain/useCases/retornarChamadosEmAtendimento";
import { chamadoAdapter } from "../adapters/chamadoAdapter";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { ChamadoRepository } from "../contracts/chamadoRepository";
import { SituacaoRepository } from "../contracts/situacaoRepository";

export class RetornarChamadosEmAtendimentoService implements RetornarChamadosEmAtendimentoUseCase {
    constructor(private readonly situacaoRepository: SituacaoRepository,
        private readonly atendenteRepository: AtendenteRepository,
        private readonly chamadoRepository: ChamadoRepository) { }
    async retornar(idAtendente: number): Promise<ChamadoModel[] | Error> {
        const atendente = await this.atendenteRepository.findById(idAtendente)
        if (!atendente) {
            return new Error('Esse atendente não existe!')
        }
        const situacao = await this.situacaoRepository.findById(1)
        if (!situacao) {
            return new Error('Essa situação não existe!')
        }
        const chamados = await this.chamadoRepository.filterByAtendenteAndSituacao(atendente, situacao)
        return chamados.map(chamado => chamadoAdapter(chamado))
    }
}