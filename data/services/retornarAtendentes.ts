import { AtendenteModel } from "../../domain/models/atendente";
import { RetornarAtendentesUseCase } from "../../domain/useCases/retornarAtendentes";
import { AtendenteRepository } from "../contracts/atendenteRepository";

export class RetornarAtendentesService implements RetornarAtendentesUseCase {
    constructor(private readonly atendenteRepository: AtendenteRepository) {}
    async retornar(): Promise<AtendenteModel[]> {
        const atendentesEntity = await this.atendenteRepository.getAll()
        const atendentes = atendentesEntity.map(atendente => ({
            id: atendente.id,
            nome: atendente.nome,
            areas: atendente.areas.map(area => ({
                id: area.id,
                nome: area.nome
            })),
        }))
        return atendentes
    }
}