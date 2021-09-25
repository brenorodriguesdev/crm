import { AreaModel } from "../models/area";

export interface CriarAreaUseCase {
    criar: (area: AreaModel) => Promise<void>
}