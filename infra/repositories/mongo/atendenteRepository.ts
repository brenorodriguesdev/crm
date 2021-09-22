import { AtendenteRepository } from "../../../data/contracts/atendenteRepository";
import { CanalRepository } from "../../../data/contracts/canalRepository";
import { AtendenteEntity } from "../../../data/entities/atendente";
import { CanalEntity } from "../../../data/entities/canal";
import { MongoHelper } from "./mongoHelper";

export class AtendenteRepositoryMongo implements AtendenteRepository {
    async findByUsuario(usuario: string): Promise<AtendenteEntity> {
        const atendenteCollection = await MongoHelper.getCollection('atendentes')
        const atendente = await atendenteCollection.findOne({
            usuario: usuario
        })
        return atendente && MongoHelper.map(atendente)
    }

    async findById(id: number): Promise<AtendenteEntity> {
        const atendenteCollection = await MongoHelper.getCollection('atendentes')
        const atendente = await atendenteCollection.findOne({
            _id: id
        })
        return atendente && MongoHelper.map(atendente)
    }
}