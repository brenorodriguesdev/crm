import { CriarSituacaoUseCase } from "../../domain/useCases/criarSituacao";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class CriarSituacaoController implements Controller {
    constructor(private readonly validator: Validator, private readonly criarSituacaoUseCase: CriarSituacaoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                nome
            } = httpRequest.body
            await this.criarSituacaoUseCase.criar(nome)
            return created()
        } catch (error) {
            return serverError()
        }
    }
}