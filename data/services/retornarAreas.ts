import { CanalModel } from "../../domain/models/canal";
import { RetornarAreasUseCase } from "../../domain/useCases/retornarAreas";
import { AreaRepository } from "../contracts/areaRepository";

export class RetornarAreasService implements RetornarAreasUseCase {
    constructor(private readonly areaRepository: AreaRepository) {}
    async retornar(): Promise<CanalModel[]> {
        const areasEntity = await this.areaRepository.getAll()
        const areas = areasEntity.map(area => ({
            id: area.id,
            nome: area.nome
        }))
        return areas
    }
}