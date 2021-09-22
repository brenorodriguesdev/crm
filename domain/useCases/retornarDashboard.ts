import { DashboardModel } from "../models/dashboard";

export interface RetornarDashboardUseCase {
    retornar: () => Promise<DashboardModel>
}