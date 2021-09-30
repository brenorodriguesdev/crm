import { AreaEntity } from '../entities/area';

export interface AreaRepository {
    save: (area: AreaEntity) => Promise<void>
}