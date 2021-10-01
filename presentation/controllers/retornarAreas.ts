import { RetornarAreasUseCase } from "../../domain/useCases/retornarAreas";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, ok } from "../contracts/httpHelper";

export class RetornarAreasController implements Controller {
    constructor(private readonly retornarAreasUseCase: RetornarAreasUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const canais = await this.retornarAreasUseCase.retornar()
            return ok(canais)
        } catch (error) {
            return serverError()
        }
    }
}