import { AdicionarAnexoUseCase } from "../../domain/useCases/adicionarAnexo";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class AdicionarAnexoController implements Controller {
    constructor(private readonly validator: Validator, private readonly adicionarAnexoUseCase: AdicionarAnexoUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate({
                idChamado: httpRequest?.body?.idChamado,
                nome: httpRequest?.file?.filename
            })
            if (error) {
                return badRequest(error)
            }
            const {
                idChamado,
                nome } = httpRequest.body
            const response = await this.adicionarAnexoUseCase.adicionar({
                idChamado,
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