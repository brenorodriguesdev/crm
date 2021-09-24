import { MissingParamError } from "../presentation/errors/missingParam";
import { Validator } from "./contracts/validator";

export class RequiredFieldValidator implements Validator {
    constructor(private readonly field: string) { }
    validate(data: any): Error {
        if (!data[this.field]) {
            return new MissingParamError(this.field)
        }
    }
}