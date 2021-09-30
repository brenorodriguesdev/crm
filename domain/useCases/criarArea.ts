export interface CriarAreaUseCase {
    criar: (nome: string) => Promise<void>
}