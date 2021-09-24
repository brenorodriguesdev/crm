import { Crypter } from "../../../data/contracts/crypter";
import * as jwt from 'jsonwebtoken'

export class Jwt implements Crypter {
    constructor(private readonly secretKey: string) { }
    async crypt(data: any): Promise<string> {
        return await jwt.sign(data, this.secretKey, {
            expiresIn: '1h'
        })
    }
}