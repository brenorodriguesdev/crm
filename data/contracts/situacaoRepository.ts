import { SituacaoEntity } from '../entities/situacao'

export interface SituacaoRepository {
    save: (situacao: SituacaoEntity) => Promise<void>
    update: (situacao: SituacaoEntity) => Promise<void>
    findById: (id: number) => Promise<SituacaoEntity>
    deleteById: (id: number) => Promise<void>
    getAll: () => Promise<SituacaoEntity[]>
}