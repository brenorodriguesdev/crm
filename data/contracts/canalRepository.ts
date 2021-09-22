import { CanalEntity } from '../entities/canal'

export interface CanalRepository {
    findById: (id: number) => Promise<CanalEntity>
    getAll: () => Promise<CanalEntity[]>
}