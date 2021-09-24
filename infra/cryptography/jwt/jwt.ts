import { Crypter } from "../../../data/contracts/crypter";
import * as jwt from 'jsonwebtoken'
import { Encrypter } from "../../../data/contracts/encrypter";

export class Jwt implements Crypter, Encrypter {
    constructor(private readonly secretKey: string) { }
    async crypt(data: any): Promise<string> {
        return await jwt.sign(data, this.secretKey, {
            expiresIn: '1h'
        })
    }
    async encrypt(value: string): Promise<any> {
        try { return await jwt.verify(value, this.secretKey) } catch { return undefined; }
    }
}