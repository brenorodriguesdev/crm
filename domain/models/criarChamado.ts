import { AtendenteModel } from "./atendente";
import { CanalModel } from "./canalModel";
import { SituacaoModel } from "./situacao";

export interface CriarChamadoModel {
    titulo: string
    descricao: string
    canal: CanalModel
    situacao: SituacaoModel
    atendente: AtendenteModel
}