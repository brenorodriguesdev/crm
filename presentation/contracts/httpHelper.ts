import { HttpResponse } from "./http";

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})

export const serverError = (): HttpResponse => ({
    statusCode: 500,
    body: new Error('Tente novamente mais tarde!')
})

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const created = (): HttpResponse => ({
    statusCode: 201,
    body: null
}) 

export const notFound = (): HttpResponse => ({
    statusCode: 404,
    body: null
})

export const unathorized = (): HttpResponse => ({
    statusCode: 401,
    body: new Error('Você não está autorizado!')
})