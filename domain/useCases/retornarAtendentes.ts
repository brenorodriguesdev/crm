import { AtendenteModel } from "../models/atendente";

export interface RetornarAtendentesUseCase {
    retornar: () => Promise<AtendenteModel[]>
}