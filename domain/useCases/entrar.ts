import { Atendente } from "../models/atendente";
import { EntrarModel } from "../models/entrar";

export interface EntrarUseCase {
    entrar: (entrarModel: EntrarModel) => Promise<Atendente>
}