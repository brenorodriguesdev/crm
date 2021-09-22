import { CanalRepository } from "../../../data/contracts/canalRepository";
import { CanalEntity } from "../../../data/entities/canal";
import { MongoHelper } from "./mongoHelper";

export class CanalRepositoryMongo implements CanalRepository {
    async findById(id: number): Promise<CanalEntity> {
        const canalCollection = await MongoHelper.getCollection('canais')
        const canal = await canalCollection.findOne({
            _id: id
        })
        return canal && MongoHelper.map(canal)
    }

    async getAll(): Promise<CanalEntity[]> {
        const canalCollection = await MongoHelper.getCollection('canais')
        const canais = await canalCollection.find({}).toArray()
        return canais.map(canal => MongoHelper.map(canal))
    }
}