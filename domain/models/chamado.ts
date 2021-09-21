import { Atendente } from "./atendente";
import { CanalModel } from "./canalModel";
import { SituacaoModel } from "./situacao";

export interface ChamadoModel {
    id: number
    titulo: string
    descricao: string
    canal: CanalModel
    situacao: SituacaoModel
    atendente: Atendente
}