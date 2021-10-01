import { SituacaoModel } from "../../domain/models/situacao";
import { SituacaoRepository } from "../contracts/situacaoRepository";

export class AlterarSituacaoService implements AlterarSituacaoService {
    constructor(private readonly situacaoRepository: SituacaoRepository) { }
    async alterar(situacao: SituacaoModel): Promise<void | Error> {
        const situacaoEntity = await this.situacaoRepository.findById(situacao.id)
        if (!situacaoEntity) {
            return new Error('Essa situação não foi encotrado!')
        }
        await this.situacaoRepository.update({
            id: situacao.id,
            nome: situacao.nome
        })
    }
}