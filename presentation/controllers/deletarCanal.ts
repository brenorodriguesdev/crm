import { DeletarCanalUseCase } from "../../domain/useCases/deletarCanal";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class DeletarCanalController implements Controller {
    constructor(private readonly validator: Validator, private readonly deletarCanalUseCase: DeletarCanalUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                idCanal
            } = httpRequest.query
            const response = await this.deletarCanalUseCase.deletar(idCanal)
            if (response instanceof Error) {
                return badRequest(response)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}