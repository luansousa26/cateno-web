import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DadosPessoais } from "../../shared/models/dados-pessoais.model";
import { itemsFiltro } from "../../shared/models/items-filtro-model";
import { Observable } from "rxjs";
import { cadastroClienteInterface } from "./cadastro-cliente.interface";
import { Endereco } from "../../shared/models/endereco.model";
@Injectable()
export class CadastroClienteService implements cadastroClienteInterface {

    private dadosPessoais: DadosPessoais;
    private urlCep = 'https://viacep.com.br/ws/';
    constructor(private http: HttpClient) {

    }
    public devolverDados(): DadosPessoais {
        return this.dadosPessoais;
    }
    public preencherDados(dadosPessoais: DadosPessoais): void {
        this.dadosPessoais = dadosPessoais;
    }

    public salvar() {
        throw new Error("Method not implemented.");
    }
    public buscarEstados(): Observable<itemsFiltro[]> {
        return this.http.get<itemsFiltro[]>('./assets/jsons/estados.json');
    }

    public buscarOrgaos(): Observable<itemsFiltro[]> {
        return this.http.get<itemsFiltro[]>('./assets/jsons/orgaos-expeditores.json');
    }
    public buscarNacionalidades(): Observable<itemsFiltro[]> {
        return this.http.get<itemsFiltro[]>('./assets/jsons/paises.json');
    }

    public buscarEndereco(cep: string) : Observable<Endereco> {
        return this.http.get<Endereco>(`${this.urlCep}/${cep}/json/`);
    }
}