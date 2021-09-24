import { CompositeValidator } from "../../../validation/composite"
import { Validator } from "../../../validation/contracts/validator"
import { RequiredFieldValidator } from "../../../validation/requiredField"

export const makeAlterarChamadoValidation = (): Validator => {
    const validators = []
    const requiredFields = 
    [   'idChamado',
        'titulo',
        'descricao',
        'idCanal',
        'idSituacao']
    for (const field of requiredFields) {
      validators.push(new RequiredFieldValidator(field))
    }
    return new CompositeValidator(validators)
  }