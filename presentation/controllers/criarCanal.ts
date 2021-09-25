import { CriarCanalUseCase } from "../../domain/useCases/criarCanal";
import { Validator } from "../../validation/contracts/validator";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, serverError, created } from "../contracts/httpHelper";

export class CriarCanalController implements Controller {
    constructor(private readonly validator: Validator, private readonly criarCanalUseCase: CriarCanalUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {
                nome
            } = httpRequest.body
            await this.criarCanalUseCase.criar(nome)
            return created()
        } catch (error) {
            return serverError()
        }
    }
}