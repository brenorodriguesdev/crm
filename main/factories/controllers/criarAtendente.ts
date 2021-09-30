import { CriarAtendenteService } from "../../../data/services/criarAtendente"
import { Bcrypt } from "../../../infra/cryptography/bcrypt/bcrypt"
import { AreaRepositoryMongo } from "../../../infra/repositories/mongo/areaRepository"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { CriarAtendenteController } from "../../../presentation/controllers/criarAtendente"
import { makeCriarAtendenteValidation } from "../validations/criarAtendente"

export const makeCriarAtendenteControler = (): Controller => {
    const areaRepositoryMongo = new AreaRepositoryMongo()
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const bcrypt = new Bcrypt()
    const criarAtendenteService = new CriarAtendenteService(areaRepositoryMongo, atendenteRepositoryMongo, bcrypt)
    const criarAtendenteController = new CriarAtendenteController(makeCriarAtendenteValidation(), criarAtendenteService)
    return criarAtendenteController
  }