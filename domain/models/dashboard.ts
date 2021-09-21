import { SituacaoModel } from "./situacao";

export interface DetalheSituacao {
    situacao: SituacaoModel
    total: number
}

export interface DetalheCanal {
    total: number
    detalhesSituacoes: DetalheSituacao[]
}

export interface DashboardModel {
    total: number
    detalhesSituacoes: DetalheSituacao[]
    detalheCanais: DetalheCanal[]
}