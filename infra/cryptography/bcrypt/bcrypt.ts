import { HashComparer } from "../../../data/contracts/hashComparer";
import bcrypt from 'bcrypt'

export class Bcrypt implements HashComparer {
    async compare(value: string, hashValue): Promise<boolean> {
        return await bcrypt.compare(value, hashValue)
    }
}