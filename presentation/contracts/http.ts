export interface HttpRequest {
    query: any
    params: any
    body: any
    file?: Express.Multer.File
}

export interface HttpResponse {
    statusCode: number
    body: any
}