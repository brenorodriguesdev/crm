import { DeletarAreaUseCase } from "../../domain/useCases/deletarArea";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class DeletarAreaController implements Controller {
    constructor(private readonly validator: Validator, private readonly deletarAreaUseCase: DeletarAreaUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                idArea
            } = httpRequest.query
            const response = await this.deletarAreaUseCase.deletar(idArea)
            if (response instanceof Error) {
                return badRequest(response)
            }
            return created()
        } catch (error) {
            return serverError()
        }
    }
}