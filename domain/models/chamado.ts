import { AtendenteModel } from "./atendente";
import { CanalModel } from "./canal";
import { SituacaoModel } from "./situacao";

export interface ChamadoModel {
    id: number
    titulo: string
    descricao: string
    canal: CanalModel
    situacao: SituacaoModel
    atendente: AtendenteModel
}