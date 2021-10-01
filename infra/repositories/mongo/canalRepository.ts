import { CanalRepository } from "../../../data/contracts/canalRepository";
import { CanalEntity } from "../../../data/entities/canal";
import { MongoHelper } from "./mongoHelper";

export class CanalRepositoryMongo implements CanalRepository {
    async save(canalEntity: CanalEntity): Promise<void> {
        const canalCollection = await MongoHelper.getCollection('canais')
        await canalCollection.insertOne(canalEntity)
    }

    async findById(id: number): Promise<CanalEntity> {
        const canalCollection = await MongoHelper.getCollection('canais')
        const canal = await canalCollection.findOne({
            _id: id
        })
        return canal && MongoHelper.map(canal)
    }

    async update(canalEntity: CanalEntity): Promise<void> {
        const canalCollection = await MongoHelper.getCollection('canais')
        await canalCollection.updateOne({ _id: canalEntity.id }, { $set: canalEntity })
    }

    async deleteById(id: number): Promise<void> {
        const canalCollection = await MongoHelper.getCollection('canais')
        await canalCollection.deleteOne({_id: id})
    }

    async getAll(): Promise<CanalEntity[]> {
        const canalCollection = await MongoHelper.getCollection('canais')
        const canais = await canalCollection.find({}).toArray()
        return canais.map(canal => MongoHelper.map(canal))
    }
}