import { ChecarPermissaoUseCase } from "../../domain/useCases/checarPermissao";
import { AtendenteRepository } from "../contracts/atendenteRepository";

export class ChecarPermissaoService implements ChecarPermissaoUseCase {
    constructor (private readonly atendenteRepository: AtendenteRepository) { }
    async checar(idAtendente: number): Promise<Error> {
        const atendente = await this.atendenteRepository.findById(idAtendente)
        if (!atendente) {
            return new Error('Esse atendente não existe!')
        }
        if (!atendente.administrador) {
            return new Error('Esse atendente não tem permissão para executar essa operação!')
        }
    }
}