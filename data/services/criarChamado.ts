import { CriarChamadoModel } from "../../domain/models/criarChamado";
import { CriarChamadoUseCase } from "../../domain/useCases/criarChamado";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { CanalRepository } from '../contracts/canalRepository'
import { ChamadoRepository } from "../contracts/chamadoRepository";
import { SituacaoRepository } from '../contracts/situacaoRepository'

export class CriarChamadoService implements CriarChamadoUseCase {
    constructor(private readonly canalRepository: CanalRepository,
        private readonly situacaoRepository: SituacaoRepository,
        private readonly atendenteRepository: AtendenteRepository,
        private readonly chamadoRepository: ChamadoRepository) { }
    async criar(criarChamadoModel: CriarChamadoModel): Promise<void | Error> {
        const canal = await this.canalRepository.findById(criarChamadoModel.idCanal)
        if (!canal) {
            return new Error('Esse canal não existe!')
        }
        const situacao = await this.situacaoRepository.findById(criarChamadoModel.idSituacao)
        if (!situacao) {
            return new Error('Essa situação não existe!')
        }
        let atendente = null
        if (criarChamadoModel.idAtendente) {
            atendente = await this.atendenteRepository.findById(criarChamadoModel.idAtendente)
            if (atendente) {
                return new Error('Esse atendente não existe!')
            }
        }
        await this.chamadoRepository.save({
            titulo: criarChamadoModel.titulo,
            descricao: criarChamadoModel.descricao,
            canal,
            situacao,
            atendente
        })
    }
}