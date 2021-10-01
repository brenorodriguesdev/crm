import { SituacaoModel } from "../models/situacao";

export interface RetornarSituacoesUseCase {
    retornar: () => Promise<SituacaoModel[]>
}