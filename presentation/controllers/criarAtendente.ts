import { CriarAtendenteUseCase } from "../../domain/useCases/criarAtendente";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class CriarAtendenteController implements Controller {
    constructor(private readonly validator: Validator, private readonly criarAtendenteUseCase: CriarAtendenteUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                usuario,
                nome,
                senha,
                areas
            } = httpRequest.body
            await this.criarAtendenteUseCase.criar({
                usuario,
                nome,
                senha,
                areas
            })
            return created()
        } catch (error) {
            return serverError()
        }
    }
}