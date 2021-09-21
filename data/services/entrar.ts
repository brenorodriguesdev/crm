import { AtendenteModel } from "../../domain/models/atendente";
import { EntrarModel } from "../../domain/models/entrar";
import { EntrarUseCase } from "../../domain/useCases/entrar";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { HashComparer } from "../contracts/hashComparer";

export class EntrarService implements EntrarUseCase {
    constructor(private readonly atendenteRepository: AtendenteRepository, private readonly hashComparer: HashComparer) { }
    async entrar(entrarModel: EntrarModel): Promise<AtendenteModel | Error> {
        const atendenteEncontrado = await this.atendenteRepository.findByUsuario(entrarModel.usuario)
        if (!atendenteEncontrado) {
            return new Error('Credenciais Inválidas!')
        }

        const isValid = await this.hashComparer.compare(entrarModel.senha, atendenteEncontrado.senha)

        if (!isValid) {
            return new Error('Credenciais Inválidas!')
        }

        return {
            id: atendenteEncontrado.id,
            nome: atendenteEncontrado.nome,
            areas: atendenteEncontrado.areas
        }
    }
}