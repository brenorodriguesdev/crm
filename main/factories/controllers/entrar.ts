import { EntrarService } from "../../../data/services/entrar"
import { Bcrypt } from "../../../infra/cryptography/bcrypt/bcrypt"
import { Jwt } from "../../../infra/cryptography/jwt/jwt"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { EntrarController } from "../../../presentation/controllers/entrar"
import { makeEntrarValidation } from "../validations/entrar"
import env from "../../config/env"

export const makeEntrarControler = (): Controller => {
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const bcrypt = new Bcrypt()
    const jwt = new Jwt(env.secretKey)
    const entrarService = new EntrarService(atendenteRepositoryMongo, bcrypt, jwt)
    const entrarController = new EntrarController(makeEntrarValidation(), entrarService)
    return entrarController
  }