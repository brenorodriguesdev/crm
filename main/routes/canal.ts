import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeAlterarCanalControler } from "../factories/controllers/alterarCanal";
import { makeCriarCanalControler } from "../factories/controllers/criarCanal";
import { makeDeletarCanalControler } from "../factories/controllers/deletarCanal";
import { makeRetornarCanaisControler } from "../factories/controllers/retornarCanais";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";
import { makeChecarPermissaoMiddleware } from "../factories/middlewares/checarPermissao";


export default (router: Router): void => {
    router.post('/criarCanal', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeCriarCanalControler()))
    router.put('/alterarCanal', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeAlterarCanalControler()))
    router.get('/retornarCanais', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeRetornarCanaisControler()))
    router.delete('/deletarCanal', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeDeletarCanalControler()))
}