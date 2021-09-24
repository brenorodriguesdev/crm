import { RetornarDashboardUseCase } from "../../domain/useCases/retornarDashboard";
import { Controller } from "../contracts/controller";
import { HttpResponse } from "../contracts/http";
import { serverError, ok } from "../contracts/httpHelper";

export class RetornarDashboardController implements Controller {
    constructor(private readonly retornarDashboardUseCase: RetornarDashboardUseCase) { }
    async handle(): Promise<HttpResponse> {
        try {
            const dashboard = await this.retornarDashboardUseCase.retornar()
            return ok(dashboard)
        } catch (error) {
            return serverError()
        }
    }
}