import { AutenticarUseCase } from "../../domain/useCases/autenticar";
import { Encrypter } from "../contracts/encrypter";

export class AutenticarService implements AutenticarUseCase {
    constructor(private readonly encrypter: Encrypter) { }

    async autenticar(accessToken: string): Promise<any> {
        const data = await this.encrypter.encrypt(accessToken)
        if (!data) {
            return new Error()
        }
        return data
    }
}