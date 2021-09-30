export interface CriarSituacaoUseCase {
    criar: (nome: string) => Promise<void>
}