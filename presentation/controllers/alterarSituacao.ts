import { AlterarSituacaoUseCase } from "../../domain/useCases/alterarSituacao";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class AlterarSituacaoController implements Controller {
    constructor(private readonly validator: Validator, private readonly alterarSituacaoUseCase: AlterarSituacaoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                id,
                nome } = httpRequest.body
            const response = await this.alterarSituacaoUseCase.alterar({
                id,
                nome
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