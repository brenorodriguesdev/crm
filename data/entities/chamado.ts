import { AtendenteEntity } from "./atendente"
import { CanalEntity } from "./canal"
import { SituacaoEntity } from "./situacao"

export class ChamadoEntity {
    id?: number
    titulo: string
    descricao: string
    canal: CanalEntity
    situacao: SituacaoEntity
    atendente?: AtendenteEntity
}