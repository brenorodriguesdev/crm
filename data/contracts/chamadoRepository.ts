import { ChamadoEntity } from "../entities/chamado";

export interface ChamadoRepository {
    findById: (id: number) => Promise<ChamadoEntity>
    save: (chamadoEntity: ChamadoEntity) => Promise<void>
    update: (chamadoEntity: ChamadoEntity) => Promise<void>
}