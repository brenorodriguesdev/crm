import { AnexoChamadoEntity } from "../entities/anexoChamado";

export interface AnexoChamadoRepository {
    save: (anexoChamado: AnexoChamadoEntity) => Promise<void>
}