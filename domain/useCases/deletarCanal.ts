export interface DeletarCanalUseCase {
    deletar: (idCanal: number) => Promise<void | Error>
}