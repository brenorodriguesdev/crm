import { AtendenteRepository } from "../../../data/contracts/atendenteRepository";
import { AtendenteEntity } from "../../../data/entities/atendente";
import { MongoHelper } from "./mongoHelper";

export class AtendenteRepositoryMongo implements AtendenteRepository {

    async save(atendenteEntity: AtendenteEntity): Promise<void> {
        const atendenteCollection = await MongoHelper.getCollection('atendentes')
        await atendenteCollection.insertOne(atendenteEntity)
    }

    async update(atendenteEntity: AtendenteEntity): Promise<void> {
        const atendenteCollection = await MongoHelper.getCollection('atendentes')
        await atendenteCollection.updateOne({ _id: atendenteEntity.id }, { $set: atendenteEntity })
    }

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

    async deleteById(id: number): Promise<void> {
        const atendenteCollection = await MongoHelper.getCollection('atendentes')
        await atendenteCollection.deleteOne({_id: id})
    }
}