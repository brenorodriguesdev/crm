import { AlterarAtendenteModel } from "../models/alterarAtendente";

export interface AlterarAtendenteUseCase {
    alterar: (alterarAtendenteModel: AlterarAtendenteModel) => Promise<void | Error>
}