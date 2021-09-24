import { Router } from "express";
import { adaptRouter } from "../adapters/expressControllerAdapter";
import { makeEntrarControler } from "../factories/controllers/entrar";


export default (router: Router): void => {
    router.post('/entrar', adaptRouter(makeEntrarControler()))
}