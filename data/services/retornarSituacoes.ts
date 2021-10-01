import { SituacaoModel } from "../../domain/models/situacao";
import { RetornarSituacoesUseCase } from "../../domain/useCases/retornarSituacoes";
import { SituacaoRepository } from "../contracts/situacaoRepository";

export class RetornarSituacoesService implements RetornarSituacoesUseCase {
    constructor(private readonly situacaoRepository: SituacaoRepository) {}
    async retornar(): Promise<SituacaoModel[]> {
        const situacoesEntity = await this.situacaoRepository.getAll()
        const situacoes = situacoesEntity.map(situacao => ({
            id: situacao.id,
            nome: situacao.nome
        }))
        return situacoes
    }
}