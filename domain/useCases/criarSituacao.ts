import { SituacaoModel } from "../models/situacao";

export interface CriarSituacaoUseCase {
    criar: (situacao: SituacaoModel) => Promise<void>
}