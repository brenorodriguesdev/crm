import { ChamadoModel } from "../../domain/models/chamado"
import { ChamadoEntity } from "../entities/chamado"

export const chamadoAdapter = (chamadoEntity: ChamadoEntity): ChamadoModel => ({
    id: chamadoEntity.id,
    titulo: chamadoEntity.titulo,
    descricao: chamadoEntity.descricao,
    canal: chamadoEntity.canal,
    situacao: chamadoEntity.situacao,
    atendente: {
        id: chamadoEntity.atendente.id,
        nome: chamadoEntity.atendente.nome,
        areas: chamadoEntity.atendente.areas
    }
})