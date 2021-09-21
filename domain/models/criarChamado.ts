import { Atendente } from "./atendente";
import { CanalModel } from "./canalModel";

export interface CriarChamadoModel {
    titulo: string
    descricao: string
    canal: CanalModel
    atendente: Atendente
}