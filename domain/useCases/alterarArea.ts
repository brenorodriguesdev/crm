import { AreaModel } from "../models/area";

export interface AlterarAreaUseCase {
    alterar: (area: AreaModel) => Promise<void | Error>
}