import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeAlterarAtendenteControler } from "../factories/controllers/alterarAtendente";
import { makeCriarAtendenteControler } from "../factories/controllers/criarAtendente";
import { makeDeletarAtendenteControler } from "../factories/controllers/deletarAtendente";
import { makeRetornarAtendentesControler } from "../factories/controllers/retornarAtendentes";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";
import { makeChecarPermissaoMiddleware } from "../factories/middlewares/checarPermissao";


export default (router: Router): void => {
    router.post('/criarAtendente', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeCriarAtendenteControler()))
    router.put('/alterarAtendente', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeAlterarAtendenteControler()))
    router.get('/retornarAtendentes', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeRetornarAtendentesControler()))
    router.delete('/deletarAtendente', adaptMiddleware(makeAutenticarMiddleware()), adaptMiddleware(makeChecarPermissaoMiddleware()), adaptRouter(makeDeletarAtendenteControler()))
}