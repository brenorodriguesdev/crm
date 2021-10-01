import { RetornarSituacoesUseCase } from "../../domain/useCases/retornarSituacoes";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, ok } from "../contracts/httpHelper";

export class RetornarSituacoesController implements Controller {
    constructor(private readonly retornarSituacoesUseCase: RetornarSituacoesUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const canais = await this.retornarSituacoesUseCase.retornar()
            return ok(canais)
        } catch (error) {
            return serverError()
        }
    }
}