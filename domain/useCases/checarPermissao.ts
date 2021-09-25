export interface ChecarPermissaoUseCase {
    checar: (idAtendente: number) => Promise<boolean | Error>
}