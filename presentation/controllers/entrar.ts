import { EntrarUseCase } from "../../domain/useCases/entrar";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, ok } from "../contracts/httpHelper";

export class EntrarController implements Controller {
    constructor(private readonly validator: Validator, private readonly entrarUseCase: EntrarUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const { usuario, senha } = httpRequest.body
            const accessToken = await this.entrarUseCase.entrar({
                usuario,
                senha
            })
            return ok(accessToken)
        } catch (error) {
            return serverError()
        }
    }
}