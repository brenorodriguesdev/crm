export interface DeletarSituacaoUseCase {
    deletar: (idSituacao: number) => Promise<void | Error>
}