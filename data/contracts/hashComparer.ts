export interface HashComparer {
    compare: (value: string, hashValue) => Promise<boolean>
}