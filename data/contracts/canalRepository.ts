import { CanalEntity } from '../entities/canal'

export interface CanalRepository {
    save: (canal: CanalEntity) => Promise<void>
    update: (canal: CanalEntity) => Promise<void>
    findById: (id: number) => Promise<CanalEntity>
    deleteById: (id: number) => Promise<void>
    getAll: () => Promise<CanalEntity[]>
}