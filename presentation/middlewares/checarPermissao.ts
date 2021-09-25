import { AutenticarUseCase } from "../../domain/useCases/autenticar";
import { ChecarPermissaoUseCase } from "../../domain/useCases/checarPermissao";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, unathorized, ok } from "../contracts/httpHelper";
import { Middleware } from "../contracts/middleware";

export class ChecarPermissaoMiddleware implements Middleware {
    constructor(private readonly checarPermissaoUseCase: ChecarPermissaoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.body
            const error = await this.checarPermissaoUseCase.checar(id)
            if (error) {
                return unathorized()
            }
            return ok({ id: id })
        } catch (error) {
            return serverError()
        }
    }
}