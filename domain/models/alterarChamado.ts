import { Atendente } from "./atendente";
import { CanalModel } from "./canalModel";
import { SituacaoModel } from "./situacao";

export interface AlterarChamadoModel {
    idChamado: number
    titulo: string
    descricao: string
    canal: CanalModel
    situacao: SituacaoModel
    atendente: Atendente
}