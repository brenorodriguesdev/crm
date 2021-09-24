export interface AutenticarUseCase {
    autenticar: (accessToken: string) => Promise<any> 
}