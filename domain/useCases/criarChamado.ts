import { CriarChamadoModel } from "../models/criarChamado";

export interface CriarChamadoUseCase {
    criar: (chamado: CriarChamadoModel) => Promise<void>
}