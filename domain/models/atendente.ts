import { AreaModel } from "./area";

export interface Atendente {
    id: number
    nome: string
    areas: AreaModel[]
}