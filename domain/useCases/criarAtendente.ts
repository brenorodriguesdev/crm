import { AtendenteModel } from "../models/atendente";

export interface CriarAtendenteUseCase {
    criar: (atendente: AtendenteModel) => Promise<void>
}