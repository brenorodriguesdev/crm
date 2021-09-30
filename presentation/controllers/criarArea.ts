import { CriarAreaUseCase } from "../../domain/useCases/criarArea";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class CriarAreaController implements Controller {
    constructor(private readonly validator: Validator, private readonly criarAreaUseCase: CriarAreaUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                nome
            } = httpRequest.body
            await this.criarAreaUseCase.criar(nome)
            return created()
        } catch (error) {
            return serverError()
        }
    }
}