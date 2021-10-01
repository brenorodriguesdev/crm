import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeAlterarSituacaoControler } from "../factories/controllers/alterarSituacao";
import { makeCriarSituacaoControler } from "../factories/controllers/criarSituacao";
import { makeDeletarSituacaoControler } from "../factories/controllers/deletarSituacao";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";
import { makeChecarPermissaoMiddleware } from "../factories/middlewares/checarPermissao";


export default (router: Router): void => {
    router.post('/criarSituacao', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeCriarSituacaoControler()))
    router.put('/alterarSituacao', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeAlterarSituacaoControler()))
    router.delete('/deletarSituacao', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeDeletarSituacaoControler()))
}