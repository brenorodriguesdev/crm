import { AlterarChamadoUseCase } from "../../domain/useCases/alterarChamado";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class AlterarChamadoController implements Controller {
    constructor(private readonly validator: Validator, private readonly alterarChamadoUseCase: AlterarChamadoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                id,
                idChamado,
                titulo,
                descricao,
                idCanal,
                idSituacao } = httpRequest.body
            await this.alterarChamadoUseCase.alterar({
                idChamado,
                titulo,
                descricao,
                idCanal,
                idSituacao,
                idAtendente: id
            })
            return created()
        } catch (error) {
            return serverError()
        }
    }
}