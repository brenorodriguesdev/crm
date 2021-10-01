import { AlterarAtendenteService } from "../../../data/services/alterarAtendente"
import { Bcrypt } from "../../../infra/cryptography/bcrypt/bcrypt"
import { AreaRepositoryMongo } from "../../../infra/repositories/mongo/areaRepository"
import { AtendenteRepositoryMongo } from "../../../infra/repositories/mongo/atendenteRepository"
import { Controller } from "../../../presentation/contracts/controller"
import { AlterarAtendenteController } from "../../../presentation/controllers/alterarAtendente"
import { makeAlterarAtendenteValidation } from "../validations/alterarAtendente"

export const makeAlterarAtendenteControler = (): Controller => {
    const areaRepositoryMongo = new AreaRepositoryMongo()
    const atendenteRepositoryMongo = new AtendenteRepositoryMongo()
    const bcrypt = new Bcrypt()
    const alterarAtendenteService = new AlterarAtendenteService(areaRepositoryMongo, atendenteRepositoryMongo, bcrypt)
    const alterarAtendenteController = new AlterarAtendenteController(makeAlterarAtendenteValidation(), alterarAtendenteService)
    return alterarAtendenteController
  }