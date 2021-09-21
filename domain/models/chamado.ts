import { Atendente } from "./atendente";
import { CanalModel } from "./canalModel";

export interface ChamadoModel {
    id: number
    titulo: string
    descricao: string
    canal: CanalModel
    atendente: Atendente
}