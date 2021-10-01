import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeAlterarAreaControler } from "../factories/controllers/alterarArea";
import { makeCriarAreaControler } from "../factories/controllers/criarArea";
import { makeDeletarAreaControler } from "../factories/controllers/deletarArea";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";
import { makeChecarPermissaoMiddleware } from "../factories/middlewares/checarPermissao";


export default (router: Router): void => {
    router.post('/criarArea', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeCriarAreaControler()))
    router.put('/alterarArea', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeAlterarAreaControler()))
    router.delete('/deletarArea', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeDeletarAreaControler()))
}