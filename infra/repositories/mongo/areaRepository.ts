import { AreaRepository } from "../../../data/contracts/areaRepository";
import { AreaEntity } from "../../../data/entities/area";
import { CanalEntity } from "../../../data/entities/canal";
import { MongoHelper } from "./mongoHelper";

export class AreaRepositoryMongo implements AreaRepository {
    async save(area: AreaEntity): Promise<void> {
        const areaCollection = await MongoHelper.getCollection('areas')
        await areaCollection.insertOne(area)
    }
}