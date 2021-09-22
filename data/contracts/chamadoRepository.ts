import { AtendenteEntity } from "../entities/atendente";
import { CanalEntity } from "../entities/canal";
import { ChamadoEntity } from "../entities/chamado";
import { SituacaoEntity } from "../entities/situacao";

export interface ChamadoRepository {
    findById: (id: number) => Promise<ChamadoEntity>
    save: (chamadoEntity: ChamadoEntity) => Promise<void>
    update: (chamadoEntity: ChamadoEntity) => Promise<void>
    filterByAtendenteAndSituacao: (atendente: AtendenteEntity, situacao: SituacaoEntity) => Promise<ChamadoEntity[]>
    filterByCanalAndSituacao: (canal: CanalEntity, situacao: SituacaoEntity) => Promise<ChamadoEntity[]>
    getCount: () => Promise<number>
    getCountBySituacao: (situacao: SituacaoEntity) => Promise<number>
    getCountByCanal: (canal: CanalEntity) => Promise<number>
    getCountByCanalAndSituacao: (canal: CanalEntity, situacao: SituacaoEntity) => Promise<number>
}