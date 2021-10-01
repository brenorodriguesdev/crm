import { AreaEntity } from '../entities/area';

export interface AreaRepository {
    save: (area: AreaEntity) => Promise<void>
    findById: (id: number) => Promise<AreaEntity>
    deleteById: (id: number) => Promise<void>
}