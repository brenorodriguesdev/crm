import { ChamadoEntity } from "../entities/chamado";

export interface ChamadoRepository {
    save: (chamadoEntity: ChamadoEntity) => Promise<void>
}