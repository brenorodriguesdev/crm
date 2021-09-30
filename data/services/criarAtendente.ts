import { CriarAtendenteModel } from "../../domain/models/criarAtendente";
import { CriarAtendenteUseCase } from "../../domain/useCases/criarAtendente";
import { AreaRepository } from "../contracts/areaRepository";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { Hasher } from "../contracts/hasher";
import { AreaEntity } from "../entities/area";

export class CriarAtendenteService implements CriarAtendenteUseCase {
    constructor (private readonly areaRepository: AreaRepository, private readonly atendenteRepository: AtendenteRepository, private readonly hasher: Hasher) {}
    async criar(criarAtendente: CriarAtendenteModel): Promise<void | Error> {
        let areas: AreaEntity[] = []
        for (let idArea of criarAtendente.areas) 
        {
            const area = await this.areaRepository.findById(idArea)
            if (!area) {
                return new Error('Essa área não existe!')
            }
            areas.push(area)
        }

        const senha = await this.hasher.hash(criarAtendente.senha)

        await this.atendenteRepository.save({
            nome: criarAtendente.nome,
            usuario: criarAtendente.usuario,
            senha,
            areas
        })
    }
}