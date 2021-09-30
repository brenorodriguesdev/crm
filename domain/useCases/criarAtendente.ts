import { CriarAtendenteModel } from "../models/criarAtendente";

export interface CriarAtendenteUseCase {
    criar: (criarAtendenteModel: CriarAtendenteModel) => Promise<void | Error>
}