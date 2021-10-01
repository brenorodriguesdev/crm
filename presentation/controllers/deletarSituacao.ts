import { DeletarSituacaoUseCase } from "../../domain/useCases/deletarSituacao";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class DeletarSituacaoController implements Controller {
    constructor(private readonly validator: Validator, private readonly seletarSituacaoUseCase: DeletarSituacaoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                idSituacao
            } = httpRequest.query
            const response = await this.seletarSituacaoUseCase.deletar(idSituacao)
            if (response instanceof Error) {
                return badRequest(response)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}