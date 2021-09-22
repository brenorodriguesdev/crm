import { SituacaoEntity } from '../entities/situacao'

export interface SituacaoRepository {
    findById: (id: number) => Promise<SituacaoEntity>
    getAll: () => Promise<SituacaoEntity[]>
}