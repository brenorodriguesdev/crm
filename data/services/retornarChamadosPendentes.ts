import { ChamadoModel } from "../../domain/models/chamado";
import { RetornarChamadosPendentesUseCase } from "../../domain/useCases/retornarChamadosPendentes";
import { chamadoAdapter } from "../adapters/chamadoAdapter";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { CanalRepository } from "../contracts/canalRepository";
import { ChamadoRepository } from "../contracts/chamadoRepository";
import { SituacaoRepository } from "../contracts/situacaoRepository";
import { situacoes } from "../entities/situacao";

export class RetornarChamadosPendentesService implements RetornarChamadosPendentesUseCase {
    constructor(private readonly canalRepository: CanalRepository,
        private readonly atendenteRepository: AtendenteRepository,
        private readonly situacaoRepository: SituacaoRepository,
        private readonly chamadoRepository: ChamadoRepository) { }
    async retornar(idCanal: number, idAtendente: number): Promise<ChamadoModel[] | Error> {
        const canal = await this.canalRepository.findById(idCanal)
        if (!canal) {
            return new Error('Esse canal não existe!')
        }

        const atendente = await this.atendenteRepository.findById(idAtendente)
        if (atendente) {
            return new Error('Esse atendente não existe!')
        }

        const situacao = await this.situacaoRepository.findById(situacoes.PENDENTE)
        if (!situacao) {
            return new Error('Essa situação não existe!')
        }

        const chamados = await this.chamadoRepository.filterByCanalAndSituacao(canal, situacao)

        return chamados.map(chamado => chamadoAdapter(chamado))

    }

}
