import { AreaModel } from "../../domain/models/area";
import { AlterarCanalUseCase } from "../../domain/useCases/alterarCanal";
import { AreaRepository } from "../contracts/areaRepository";

export class AlterarCanalService implements AlterarCanalUseCase {
    constructor(private readonly areaRepository: AreaRepository) { }
    async alterar(area: AreaModel): Promise<void | Error> {
        const areaEntity = await this.areaRepository.findById(area.id)
        if (!areaEntity) {
            return new Error('Essa área não foi encotrado!')
        }
        await this.areaRepository.update({
            id: area.id,
            nome: area.nome
        })
    }
}