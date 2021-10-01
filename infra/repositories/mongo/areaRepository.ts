import { AreaRepository } from "../../../data/contracts/areaRepository";
import { AreaEntity } from "../../../data/entities/area";
import { MongoHelper } from "./mongoHelper";

export class AreaRepositoryMongo implements AreaRepository {
    async save(area: AreaEntity): Promise<void> {
        const areaCollection = await MongoHelper.getCollection('areas')
        await areaCollection.insertOne(area)
    }

    async deleteById(id: number): Promise<void> {
        const areaCollection = await MongoHelper.getCollection('areas')
        await areaCollection.deleteOne({_id: id})
    }

    async update(areaEntity: AreaEntity): Promise<void> {
        const areaCollection = await MongoHelper.getCollection('areas')
        await areaCollection.updateOne({ _id: areaEntity.id }, { $set: areaEntity })
    }

    async findById(id: number): Promise<AreaEntity> {
        const areaCollection = await MongoHelper.getCollection('areas')
        const area = await areaCollection.findOne({
            _id: id
        })
        return area && MongoHelper.map(area)
    }
}