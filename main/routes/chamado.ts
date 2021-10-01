import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { adaptMiddleware } from "../adapters/expressMiddlewareAdapter";
import { makeAlterarChamadoControler } from "../factories/controllers/alterarChamado";
import { makeAtenderChamadoControler } from "../factories/controllers/atenderChamado";
import { makeCriarChamadoControler } from "../factories/controllers/criarChamado";
import { makeRetornarChamadosEmAtendimentoControler } from "../factories/controllers/retornarChamadosEmAtendimento";
import { makeRetornarChamadosPendentesControler } from "../factories/controllers/retornarChamadosPendentes";
import { makeAutenticarMiddleware } from "../factories/middlewares/autenticar";


export default (router: Router): void => {
    router.post('/criarChamado', adaptMiddleware(makeAutenticarMiddleware()), adaptRouter(makeCriarChamadoControler()))
    router.post('/atenderChamado', adaptMiddleware(makeAutenticarMiddleware()), adaptRouter(makeAtenderChamadoControler()))
    router.put('/alterarChamado', adaptMiddleware(makeAutenticarMiddleware()), adaptRouter(makeAlterarChamadoControler()))
    router.get('/retornarChamadosEmAtendimento', adaptMiddleware(makeAutenticarMiddleware()), adaptRouter(makeRetornarChamadosEmAtendimentoControler()))
    router.get('/retornarChamadosPendentes', adaptMiddleware(makeAutenticarMiddleware()), adaptRouter(makeRetornarChamadosPendentesControler()))
}