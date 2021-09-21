import { ChamadoModel } from "../models/chamado";

export interface RetornarChamadosEmAtendimentoUseCase {
    retornar: (idAtendente: number) => Promise<ChamadoModel[]>
}