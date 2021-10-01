import { RetornarCanaisUseCase } from "../../domain/useCases/retornarCanais";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, ok } from "../contracts/httpHelper";

export class RetornarCanaisController implements Controller {
    constructor(private readonly retornarCanaisUseCase: RetornarCanaisUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const canais = await this.retornarCanaisUseCase.retornar()
            return ok(canais)
        } catch (error) {
            return serverError()
        }
    }
}