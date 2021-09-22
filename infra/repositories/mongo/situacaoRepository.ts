import { SituacaoRepository } from "../../../data/contracts/situacaoRepository";
import { SituacaoEntity } from "../../../data/entities/situacao";
import { MongoHelper } from "./mongoHelper";

export class SituacaoRepositoryMongo implements SituacaoRepository {
    async findById(id: number): Promise<SituacaoEntity> {
        const situacaoCollection = await MongoHelper.getCollection('situacoes')
        const situacao = await situacaoCollection.findOne({
            _id: id
        })
        return situacao && MongoHelper.map(situacao)
    }

    async getAll(): Promise<SituacaoEntity[]> {
        const situacaoCollection = await MongoHelper.getCollection('situacoes')
        const situacoes = await situacaoCollection.find({}).toArray()
        return situacoes.map(situacao => MongoHelper.map(situacao))
    }
}