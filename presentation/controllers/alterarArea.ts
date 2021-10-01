import { AlterarAreaUseCase } from "../../domain/useCases/alterarArea";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class AlterarAreaController implements Controller {
    constructor(private readonly validator: Validator, private readonly alterarAreaUseCase: AlterarAreaUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                id,
                nome } = httpRequest.body
            const response = await this.alterarAreaUseCase.alterar({
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