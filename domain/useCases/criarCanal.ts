export interface CriarCanalUseCase {
    criar: (nome: string) => Promise<void>
}