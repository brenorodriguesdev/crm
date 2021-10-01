import { CompositeValidator } from "../../../validation/composite"
import { Validator } from "../../../validation/contracts/validator"
import { RequiredFieldValidator } from "../../../validation/requiredField"

export const makeDeletarAreaValidation = (): Validator => {
    const validators = []
    const requiredFields = ['idArea']
    for (const field of requiredFields) {
      validators.push(new RequiredFieldValidator(field))
    }
    return new CompositeValidator(validators)
  }