import { CriarSituacaoUseCase } from "../../domain/useCases/criarSituacao";
import { SituacaoRepository } from "../contracts/situacaoRepository";

export class CriarSituacaoService implements CriarSituacaoUseCase {
    constructor (private readonly situacaoRepository: SituacaoRepository) {}
    async criar(nome: string): Promise<void> {
        await this.situacaoRepository.save({
            nome
        })
    }
}