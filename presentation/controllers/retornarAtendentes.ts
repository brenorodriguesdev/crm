import { RetornarAtendentesUseCase } from "../../domain/useCases/retornarAtendentes";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, ok } from "../contracts/httpHelper";

export class RetornarAtendentesController implements Controller {
    constructor(private readonly retornarAtendentesUseCase: RetornarAtendentesUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const canais = await this.retornarAtendentesUseCase.retornar()
            return ok(canais)
        } catch (error) {
            return serverError()
        }
    }
}