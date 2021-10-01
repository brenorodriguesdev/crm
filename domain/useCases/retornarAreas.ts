import { AreaModel } from "../models/area";

export interface RetornarAreasUseCase {
    retornar: () => Promise<AreaModel[]>
}