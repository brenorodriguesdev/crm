import { RetornarChamadosPendentesService } from "../../data/services/retornarChamadosPendentes";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, ok, badRequest } from "../contracts/httpHelper";

export class RetornarChamadosPendentesController implements Controller {
    constructor(private readonly validator: Validator, private readonly retornarChamadosPendentesService: RetornarChamadosPendentesService) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.query)
            if (error) {
                return badRequest(error)
            }
            const { idCanal } = httpRequest.query
            const { id } = httpRequest.body
            const chamados = await this.retornarChamadosPendentesService.retornar(idCanal, id)
            return ok(chamados)
        } catch (error) {
            return serverError()
        }
    }
}