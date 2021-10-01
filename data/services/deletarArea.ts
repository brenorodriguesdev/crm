import { DeletarAreaUseCase } from "../../domain/useCases/deletarArea"
import { AreaRepository } from "../contracts/areaRepository"

export class DeletarAreaService implements DeletarAreaUseCase {
    constructor (private readonly areaRepository: AreaRepository) { }
    async deletar(idArea: number): Promise<void | Error> {
        const area = await this.areaRepository.findById(idArea)
        if (!area) {
            return new Error('Essa area não foi encontrado!')
        }
        await this.areaRepository.deleteById(idArea)
    }
}