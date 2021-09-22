import { AtenderChamadoModel } from "../../domain/models/atenderChamado";
import { AtenderChamadoUseCase } from "../../domain/useCases/atenderChamado";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { ChamadoRepository } from "../contracts/chamadoRepository";

export class AtenderChamadoService implements AtenderChamadoUseCase {
    constructor(private readonly chamadoRepository: ChamadoRepository, private readonly atendenteRepository: AtendenteRepository) { }
    async atender(atenderChamadoModel: AtenderChamadoModel): Promise<void | Error> {
        const chamado = await this.chamadoRepository.findById(atenderChamadoModel.idChamado)
        if (!chamado) {
            return new Error('Esse chamado não existe!')
        }
        const atendente = await this.atendenteRepository.findById(atenderChamadoModel.idAtendente)
        if (!atendente) {
            return new Error('Esse atendente não existe!')
        }
        chamado.atendente = atendente
        await this.chamadoRepository.update(chamado)
    }
}