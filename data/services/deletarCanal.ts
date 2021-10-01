import { DeletarCanalUseCase } from "../../domain/useCases/deletarCanal";
import { CanalRepository } from "../contracts/canalRepository";

export class DeletarCanalService implements DeletarCanalUseCase {
    constructor (private readonly canalRepository: CanalRepository) { }
    async deletar(idCanal: number): Promise<void | Error> {
        const canal = await this.canalRepository.findById(idCanal)
        if (!canal) {
            return new Error('Esse canal não foi encontrado!')
        }
        await this.canalRepository.deleteById(idCanal)
    }
}