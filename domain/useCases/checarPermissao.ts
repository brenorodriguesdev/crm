export interface ChecarPermissaoUseCase {
    checar: (idAtendente: number) => Promise<Error>
}