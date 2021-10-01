import { AreaModel } from "../../domain/models/area";
import { AlterarAreaUseCase } from "../../domain/useCases/alterarArea";
import { AreaRepository } from "../contracts/areaRepository";

export class AlterarAreaService implements AlterarAreaUseCase {
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