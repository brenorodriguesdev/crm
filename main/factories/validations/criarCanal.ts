import { CompositeValidator } from "../../../validation/composite"
import { Validator } from "../../../validation/contracts/validator"
import { RequiredFieldValidator } from "../../../validation/requiredField"

export const makeCriarCanalValidation = (): Validator => {
    const validators = []
    const requiredFields = ['nome']
    for (const field of requiredFields) {
      validators.push(new RequiredFieldValidator(field))
    }
    return new CompositeValidator(validators)
  }