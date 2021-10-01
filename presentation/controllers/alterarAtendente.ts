import { AlterarAtendenteUseCase } from "../../domain/useCases/alterarAtendente";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class AlterarAtendenteController implements Controller {
    constructor(private readonly validator: Validator, private readonly alterarAtendenteUseCase: AlterarAtendenteUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                id,
                nome,
                senha,
                areas
            } = httpRequest.body
            const response = await this.alterarAtendenteUseCase.alterar({
                id,
                nome,
                senha,
                areas
            })
            if (response instanceof Error) {
                return badRequest(response)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}