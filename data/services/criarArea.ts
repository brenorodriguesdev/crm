import { CriarAreaUseCase } from "../../domain/useCases/criarArea";
import { AreaRepository } from "../contracts/areaRepository";

export class CriarAreaService implements CriarAreaUseCase {
    constructor (private readonly areaRepository: AreaRepository) {}
    async criar(nome: string): Promise<void> {
        await this.areaRepository.save({
            nome
        })
    }
}