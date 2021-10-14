import { AnexoChamadoRepository } from "../../../data/contracts/anexoChamadoRepository";
import { AnexoChamadoEntity } from "../../../data/entities/anexoChamado";
import { MongoHelper } from "./mongoHelper";

export class AnexoChamadoRepositoryMongo implements AnexoChamadoRepository {
    async save(anexoChamado: AnexoChamadoEntity): Promise<void> {
        const anexoChamadoCollection = await MongoHelper.getCollection('anexosChamados')
        await anexoChamadoCollection.insertOne(anexoChamado)
    }
}
