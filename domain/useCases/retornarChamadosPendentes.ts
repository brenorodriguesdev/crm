import { ChamadoModel } from "../models/chamado";

export interface RetornarChamadosPendentesUseCase {
    retornar: (idCanal: number, idAtendente: number) => Promise<ChamadoModel[] | Error>
}