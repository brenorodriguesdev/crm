import { AreaModel } from "./area";

export interface AtendenteModel {
    id: number
    nome: string
    senha: string
    areas: AreaModel[]
}