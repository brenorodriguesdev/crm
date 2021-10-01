export interface DeletarAtendenteUseCase {
    deletar: (idAtendente: number) => Promise<void | Error>
}