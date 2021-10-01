import { CanalModel } from "../models/canal";

export interface RetornarCanaisUseCase {
    retornar: () => Promise<CanalModel[]>
}