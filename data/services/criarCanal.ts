import { CanalModel } from "../../domain/models/canal";
import { CriarCanalUseCase } from "../../domain/useCases/criarCanal";
import { CanalRepository } from "../contracts/canalRepository";

export class CriarCanalService implements CriarCanalUseCase {
    constructor (private readonly canalRepository: CanalRepository) {}
    async criar(canal: CanalModel): Promise<void> {
        await this.canalRepository.save(canal)
    }
}