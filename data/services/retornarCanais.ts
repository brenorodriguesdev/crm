import { CanalModel } from "../../domain/models/canal";
import { RetornarCanaisUseCase } from "../../domain/useCases/retornarCanais";
import { CanalRepository } from "../contracts/canalRepository";

export class RetornarCanaisService implements RetornarCanaisUseCase {
    constructor(private readonly canalRepository: CanalRepository) {}
    async retornar(): Promise<CanalModel[]> {
        const canaisEntity = await this.canalRepository.getAll()
        const canais = canaisEntity.map(canal => ({
            id: canal.id,
            nome: canal.nome
        }))
        return canais
    }
}