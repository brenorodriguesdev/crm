import { SituacaoEntity } from '../entities/situacao'

export interface SituacaoRepository {
    save: (situacao: SituacaoEntity) => Promise<void>
    findById: (id: number) => Promise<SituacaoEntity>
    getAll: () => Promise<SituacaoEntity[]>
}