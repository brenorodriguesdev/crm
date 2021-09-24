import { EntrarModel } from "../models/entrar";

export interface EntrarUseCase {
    entrar: (entrarModel: EntrarModel) => Promise<string | Error> 
}