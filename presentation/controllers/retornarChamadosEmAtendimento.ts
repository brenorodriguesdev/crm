import { RetornarChamadosEmAtendimentoService } from "../../data/services/retornarChamadosEmAtendimento";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { serverError, ok } from "../contracts/httpHelper";

export class RetornarChamadosEmAtendimentoController implements Controller {
    constructor(private readonly retornarChamadosEmAtendimentoService: RetornarChamadosEmAtendimentoService) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.body
            const chamados = await this.retornarChamadosEmAtendimentoService.retornar(id)
            return ok(chamados)
        } catch (error) {
            return serverError()
        }
    }
}