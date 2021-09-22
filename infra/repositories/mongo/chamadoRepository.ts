import { ChamadoRepository } from "../../../data/contracts/chamadoRepository";
import { AtendenteEntity } from "../../../data/entities/atendente";
import { CanalEntity } from "../../../data/entities/canal";
import { ChamadoEntity } from "../../../data/entities/chamado";
import { SituacaoEntity } from "../../../data/entities/situacao";
import { MongoHelper } from "./mongoHelper";

export class ChamadoRepositoryMongo implements ChamadoRepository {
    async findById(id: number): Promise<ChamadoEntity> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        const chamado = await chamadoCollection.findOne({
            _id: id
        })
        return chamado && MongoHelper.map(chamado)
    }

    async save(chamadoEntity: ChamadoEntity): Promise<void> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        await chamadoCollection.insertOne(chamadoEntity)
    }

    async update(chamadoEntity: ChamadoEntity): Promise<void> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        await chamadoCollection.updateOne({ _id: chamadoEntity.id }, { $set: chamadoEntity })
    }

    async filterByAtendenteAndSituacao(atendente: AtendenteEntity, situacao: SituacaoEntity): Promise<ChamadoEntity[]> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        const chamados = await chamadoCollection.find({ atendente, situacao }).toArray()
        return chamados.map(chamado => MongoHelper.map(chamado))
    }

    async filterByCanalAndSituacao(canal: CanalEntity, situacao: SituacaoEntity): Promise<ChamadoEntity[]> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        const chamados = await chamadoCollection.find({ canal, situacao }).toArray()
        return chamados.map(chamado => MongoHelper.map(chamado))
    }

    async getCount(): Promise<number> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        const count = await chamadoCollection.countDocuments()
        return count
    }

    async getCountBySituacao(situacao: SituacaoEntity): Promise<number> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        const count = await chamadoCollection.countDocuments({ situacao })
        return count
    }

    async getCountByCanal(canal: CanalEntity): Promise<number> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        const count = await chamadoCollection.countDocuments({ canal })
        return count
    }

    async getCountByCanalAndSituacao(canal: CanalEntity, situacao: SituacaoEntity): Promise<number> {
        const chamadoCollection = await MongoHelper.getCollection('chamados')
        const count = await chamadoCollection.countDocuments({ canal, situacao })
        return count
    }
}
