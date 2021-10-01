import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeCriarCanalControler } from "../factories/controllers/criarCanal";
import { makeDeletarCanalControler } from "../factories/controllers/deletarCanal";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";
import { makeChecarPermissaoMiddleware } from "../factories/middlewares/checarPermissao";


export default (router: Router): void => {
    router.post('/criarCanal', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeCriarCanalControler()))
    router.post('/deletarCanal', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeDeletarCanalControler()))
}