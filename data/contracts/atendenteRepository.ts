import { AtendenteEntity } from "../entities/atendente";

export interface AtendenteRepository {
    findByUsuario: (usuario: string) => Promise<AtendenteEntity>
    findById: (id: number) => Promise<AtendenteEntity>
}