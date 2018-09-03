import { itemsFiltro } from "../../shared/models/items-filtro-model";
import { Observable } from "rxjs";
import { Endereco } from "../../shared/models/endereco.model";

export interface cadastroClienteInterface{

    salvar();

    buscarEstados(): Observable<itemsFiltro[]>;

    buscarOrgaos(): Observable<itemsFiltro[]>;

    buscarNacionalidades(): Observable<itemsFiltro[]>;

    buscarEndereco(cep: string): Observable<Endereco>;
}