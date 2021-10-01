import { AtendenteModel } from "../models/atendente";

export interface AlterarAtendenteUseCase {
    alterar: (atendente: AtendenteModel) => Promise<void | Error>
}