import { CanalModel } from "../../domain/models/canal";
import { AlterarCanalUseCase } from "../../domain/useCases/alterarCanal";
import { CanalRepository } from "../contracts/canalRepository";

export class AlterarCanalService implements AlterarCanalUseCase {
    constructor(private readonly canalRepository: CanalRepository) { }
    async alterar(canal: CanalModel): Promise<void | Error> {
        const canalEntity = await this.canalRepository.findById(canal.id)
        if (!canalEntity) {
            return new Error('Esse canal não foi encotrado!')
        }
        await this.canalRepository.update({
            id: canal.id,
            nome: canal.nome
        })
    }
}