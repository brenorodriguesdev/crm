export class MissingParamError extends Error {
    constructor(param: string) {
        super(`O campo ${param} é obrigatório!`)
    }
}