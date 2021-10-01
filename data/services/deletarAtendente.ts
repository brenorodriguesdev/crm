import { DeletarAtendenteUseCase } from "../../domain/useCases/deletarAtendente"
import { AtendenteRepository } from "../contracts/atendenteRepository"

export class DeletarAtendenteService implements DeletarAtendenteUseCase {
    constructor (private readonly atendenteRepository: AtendenteRepository) { }
    async deletar(idAtendente: number): Promise<void | Error> {
        const area = await this.atendenteRepository.findById(idAtendente)
        if (!area) {
            return new Error('Esse atendente não foi encontrado!')
        }
        await this.atendenteRepository.deleteById(idAtendente)
    }
}