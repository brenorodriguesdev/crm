import { HashComparer } from "../../../data/contracts/hashComparer";
import bcrypt from 'bcrypt'
import { Hasher } from "../../../data/contracts/hasher";

export class Bcrypt implements HashComparer, Hasher {
    async compare(value: string, hashValue): Promise<boolean> {
        return await bcrypt.compare(value, hashValue)
    }

    async hash(value: string): Promise<string> {
        return await bcrypt.hash(value, 8)
    }
}