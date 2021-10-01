export interface DeletarAreaUseCase {
    deletar: (idArea: number) => Promise<void | Error>
}