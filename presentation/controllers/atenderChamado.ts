import { AtenderChamadoUseCase } from "../../domain/useCases/atenderChamado";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, ok } from "../contracts/httpHelper";

export class AtenderChamadoController implements Controller {
    constructor(private readonly validator: Validator, private readonly atenderChamadoUseCase: AtenderChamadoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { id, idChamado} = httpRequest.body
            const accessToken = await this.atenderChamadoUseCase.atender({
                idChamado,
                idAtendente: id
            })
            return ok(accessToken)
        } catch (error) {
            return serverError()
        }
    }
}