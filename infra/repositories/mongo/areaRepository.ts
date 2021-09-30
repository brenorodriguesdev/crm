import { AreaRepository } from "../../../data/contracts/areaRepository";
import { AreaEntity } from "../../../data/entities/area";
import { MongoHelper } from "./mongoHelper";

export class AreaRepositoryMongo implements AreaRepository {
    async save(area: AreaEntity): Promise<void> {
        const areaCollection = await MongoHelper.getCollection('areas')
        await areaCollection.insertOne(area)
    }

    async findById(id: number): Promise<AreaEntity> {
        const areaCollection = await MongoHelper.getCollection('areas')
        const area = await areaCollection.findOne({
            _id: id
        })
        return area && MongoHelper.map(area)
    }
}