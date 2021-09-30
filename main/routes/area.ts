import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeCriarAreaControler } from "../factories/controllers/criarArea";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";
import { makeChecarPermissaoMiddleware } from "../factories/middlewares/checarPermissao";


export default (router: Router): void => {
    router.post('/criarArea', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeCriarAreaControler()))
}