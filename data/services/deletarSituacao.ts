import { DeletarSituacaoUseCase } from "../../domain/useCases/deletarSituacao";
import { SituacaoRepository } from "../contracts/situacaoRepository";

export class DeletarSituacaoService implements DeletarSituacaoUseCase {
    constructor (private readonly situacaoRepository: SituacaoRepository) { }
    async deletar(idSituacao: number): Promise<void | Error> {
        const situacao = await this.situacaoRepository.findById(idSituacao)
        if (!situacao) {
            return new Error('Essa situação não foi encontrado!')
        }
        await this.situacaoRepository.deleteById(idSituacao)
    }
}