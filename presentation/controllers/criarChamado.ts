import { AtenderChamadoUseCase } from "../../domain/useCases/atenderChamado";
import { CriarChamadoUseCase } from "../../domain/useCases/criarChamado";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, ok, created } from "../contracts/httpHelper";

export class CriarChamadoController implements Controller {
    constructor(private readonly validator: Validator, private readonly criarChamadoUseCase: CriarChamadoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                titulo,
                descricao,
                idCanal,
                idSituacao,
                idAtendente
            } = httpRequest.body
            await this.criarChamadoUseCase.criar({
                titulo,
                descricao,
                idCanal,
                idSituacao,
                idAtendente
            })
            return created()
        } catch (error) {
            return serverError()
        }
    }
}