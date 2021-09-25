import { CanalEntity } from '../entities/canal'

export interface CanalRepository {
    save: (canal: CanalEntity) => Promise<void>
    findById: (id: number) => Promise<CanalEntity>
    getAll: () => Promise<CanalEntity[]>
}