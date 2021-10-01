import { AtendenteEntity } from "../entities/atendente";

export interface AtendenteRepository {
    save: (atendente: AtendenteEntity) => Promise<void>
    findByUsuario: (usuario: string) => Promise<AtendenteEntity>
    findById: (id: number) => Promise<AtendenteEntity>
    deleteById: (id: number) => Promise<void>
}