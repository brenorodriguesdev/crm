import { AreaModel } from "../models/area";

export interface CriarArea {
    criar: (area: AreaModel) => Promise<void>
}