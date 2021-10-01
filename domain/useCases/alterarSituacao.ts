import { SituacaoModel } from "../models/situacao";

export interface AlterarSituacaoUseCase {
    alterar: (situacao: SituacaoModel) => Promise<void | Error>
}