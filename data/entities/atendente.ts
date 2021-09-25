import { AreaEntity } from "./area"

export class AtendenteEntity {
    id?: number
    usuario: string
    senha: string
    nome: string
    areas: AreaEntity[]
    administrador?: boolean
}