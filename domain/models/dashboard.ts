import { CanalModel } from "./canalModel";
import { SituacaoModel } from "./situacao";

export interface DetalheSituacao {
    situacao: SituacaoModel
    total: number
}

export interface DetalheCanal {
    canal: CanalModel
    total: number
    detalhesSituacoes: DetalheSituacao[]
}

export interface DashboardModel {
    total: number
    detalhesSituacoes: DetalheSituacao[]
    detalhesCanais: DetalheCanal[]
}