import { AtenderChamadoModel } from "../models/atenderChamado";

export interface AtenderChamadoUseCase {
    atender: (atenderChamadoModel: AtenderChamadoModel) => Promise<void | Error>
}