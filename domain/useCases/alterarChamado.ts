import { AlterarChamadoModel } from "../models/alterarChamado";

export interface AlterarChamadoUseCase {
    alterar: (alterarChamadoModel: AlterarChamadoModel) => Promise<void>
}