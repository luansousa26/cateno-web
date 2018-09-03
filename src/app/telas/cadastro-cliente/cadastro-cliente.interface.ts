import { itemsFiltro } from "../../shared/models/items-filtro-model";
import { Observable } from "rxjs";

export interface cadastroClienteInterface{

    salvar();

    buscarEstados(): Observable<itemsFiltro[]>;

    buscarOrgaos(): Observable<itemsFiltro[]>;

    buscarNacionalidades(): Observable<itemsFiltro[]>;
}