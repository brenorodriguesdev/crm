import { AdicionarAnexoModel } from "../../domain/models/adicionarAnexo";
import { AdicionarAnexoUseCase } from "../../domain/useCases/adicionarAnexo";
import { AnexoChamadoRepository } from "../contracts/anexoChamadoRepository";
import { ChamadoRepository } from "../contracts/chamadoRepository";

export class AdicionarAnexoService implements AdicionarAnexoUseCase {
    constructor(private readonly chamadoRepository: ChamadoRepository, private readonly anexoChamadoRepository: AnexoChamadoRepository) { }
    async adicionar(adicionarAnexoModel: AdicionarAnexoModel): Promise<void | Error> {
        const chamado = await this.chamadoRepository.findById(adicionarAnexoModel.idChamado)
        if (!chamado) {
            return new Error('Esse chamado não existe!')
        }

        await this.anexoChamadoRepository.save({
            nome: adicionarAnexoModel.nome,
            chamado
        })
    }
}