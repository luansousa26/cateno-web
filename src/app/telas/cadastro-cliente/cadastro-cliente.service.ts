import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DadosPessoais } from "../../shared/models/dados-pessoais.model";
@Injectable()
export class CadastroClienteService{

    private dadosPessoais: DadosPessoais;


    devolverDados() : DadosPessoais {
        return this.dadosPessoais;
    }
    preencherDados(dadosPessoais: DadosPessoais): void {
        this.dadosPessoais = dadosPessoais;
    }
}