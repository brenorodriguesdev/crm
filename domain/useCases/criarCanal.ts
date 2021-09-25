import { CanalModel } from "../models/canal";

export interface CriarCanalUseCase {
    criar: (canal: CanalModel) => Promise<void>
}