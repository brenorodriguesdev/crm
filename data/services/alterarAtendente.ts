import { AlterarAtendenteModel } from "../../domain/models/alterarAtendente";
import { AlterarAtendenteUseCase } from "../../domain/useCases/alterarAtendente";
import { AreaRepository } from "../contracts/areaRepository";
import { AtendenteRepository } from "../contracts/atendenteRepository";
import { Hasher } from "../contracts/hasher";
import { AreaEntity } from "../entities/area";

export class AlterarAtendenteService implements AlterarAtendenteUseCase {
    constructor (private readonly areaRepository: AreaRepository, private readonly atendenteRepository: AtendenteRepository, private readonly hasher: Hasher) {}
    async alterar(alterarAtendenteModel: AlterarAtendenteModel): Promise<void | Error> {
        const atendenteEntity = await this.atendenteRepository.findById(alterarAtendenteModel.id)
        if (!atendenteEntity) {
            return new Error('Esse atendente não foi encontrado!')
        }
        let areas: AreaEntity[] = []
        for (let idArea of alterarAtendenteModel.areas) 
        {
            const area = await this.areaRepository.findById(idArea)
            if (!area) {
                return new Error('Essa área não existe!')
            }
            areas.push(area)
        }

        const senha = await this.hasher.hash(alterarAtendenteModel.senha)

        await this.atendenteRepository.update({
            id: alterarAtendenteModel.id,
            nome: alterarAtendenteModel.nome,
            usuario: atendenteEntity.usuario,
            senha,
            areas
        })
    }
}