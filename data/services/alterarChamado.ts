import { AlterarChamadoModel } from "../../domain/models/alterarChamado";
import { AlterarChamadoUseCase } from "../../domain/useCases/alterarChamado";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { CanalRepository } from '../contracts/canalRepository'
import { ChamadoRepository } from "../contracts/chamadoRepository";
import { SituacaoRepository } from '../contracts/situacaoRepository'

export class AlterarChamadoService implements AlterarChamadoUseCase {
    constructor(private readonly canalRepository: CanalRepository,
        private readonly situacaoRepository: SituacaoRepository,
        private readonly atendenteRepository: AtendenteRepository,
        private readonly chamadoRepository: ChamadoRepository) { }
    async alterar(alterarChamadoModel: AlterarChamadoModel): Promise<void | Error> {
        const chamado = await this.chamadoRepository.findById(alterarChamadoModel.idChamado)
        if (!chamado) {
            return new Error('Esse chamado não existe!')
        }
        const canal = await this.canalRepository.findById(alterarChamadoModel.idCanal)
        if (!canal) {
            return new Error('Esse canal não existe!')
        }
        const situacao = await this.situacaoRepository.findById(alterarChamadoModel.idSituacao)
        if (!situacao) {
            return new Error('Essa situação não existe!')
        }

        const atendente = await this.atendenteRepository.findById(alterarChamadoModel.idAtendente)
        if (atendente) {
            return new Error('Esse atendente não existe!')
        }

        chamado.titulo = alterarChamadoModel.titulo
        chamado.descricao = alterarChamadoModel.descricao
        chamado.canal = canal
        chamado.situacao = situacao
        chamado.atendente = atendente
        
        await this.chamadoRepository.update(chamado)
    }
}