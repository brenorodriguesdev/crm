import { AreaModel } from "../../domain/models/area"

export class AtendenteEntity {
    id: number
    usuario: string
    senha: string
    nome: string
    areas: AreaModel[]
}