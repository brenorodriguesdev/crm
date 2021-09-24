import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeRetornarDashboardControler } from "../factories/controllers/retornarDashboard";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";


export default (router: Router): void => {
    router.get('/retornarDashboard', adaptMiddleware(makeAutenticarMiddleware()), adaptRouter(makeRetornarDashboardControler()))
}