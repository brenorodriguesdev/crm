import { DeletarAtendenteUseCase } from "../../domain/useCases/deletarAtendente";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class DeletarAtendenteController implements Controller {
    constructor(private readonly validator: Validator, private readonly deletarAtendenteUseCase: DeletarAtendenteUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                idAtendente
            } = httpRequest.query
            const response = await this.deletarAtendenteUseCase.deletar(idAtendente)
            if (response instanceof Error) {
                return badRequest(response)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}