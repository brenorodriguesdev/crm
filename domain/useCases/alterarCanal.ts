import { CanalModel } from "../models/canal";

export interface AlterarCanalUseCase {
    alterar: (canal: CanalModel) => Promise<void | Error>
}