import { AdicionarAnexoModel } from "../models/adicionarAnexo";

export interface AdicionarAnexoUseCase {
    adicionar: (adicionarAnexoModel: AdicionarAnexoModel) => Promise<void | Error>
}