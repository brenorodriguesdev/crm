import { AutenticarUseCase } from "../../domain/useCases/autenticar";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, unathorized, ok } from "../contracts/httpHelper";
import { Middleware } from "../contracts/middleware";

export class AutenticarMiddleware implements Middleware {
    constructor(private readonly autenticarUseCase: AutenticarUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { accessToken } = httpRequest.body
            const data = await this.autenticarUseCase.autenticar(accessToken)
            if (data instanceof Error) {
                return unathorized()
            }
            return ok({ id: data.id })
        } catch (error) {
            return serverError()
        }
    }
}