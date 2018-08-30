import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../../shared/modulos-compartilhados/models/dados-pessoais.model';

@Component({
  selector: 'app-solicitar-cartao',
  templateUrl: './solicitar-cartao.component.html',
  styleUrls: ['./solicitar-cartao.component.scss']
})
export class SolicitarCartaoComponent implements OnInit {

  cpf: string;
  dadosPessoais: DadosPessoais;
  nomeCartao: string;
  constructor() {
    this.dadosPessoais = new DadosPessoais();
  }

  ngOnInit() {
  }

  apenasCaracteres(teclaPressionada: KeyboardEvent) {
    const regexLetras = new RegExp('[a-zA-Z ]');
    this.preencheNomeCartao();
    return regexLetras.test(teclaPressionada.key) ? true : false;
  }
  validarEmail(email: string) {
    const regexEmail = new RegExp('/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i');
    return regexEmail.test(email) ? true : false;
  }
  apenasNumeros(teclaPressionada: KeyboardEvent) {
    const regexNumeros = new RegExp('^[0-9]*$');
    return regexNumeros.test(teclaPressionada.key) ? true : false;
  }

  mascaraCpf(teclaPressionada: KeyboardEvent) {

    if(!this.apenasNumeros(teclaPressionada)) {
      return false;
    }
    if (this.dadosPessoais.cpf !== null && this.dadosPessoais.cpf !== undefined) {
      switch (this.dadosPessoais.cpf.length) {
        case 3:
        this.dadosPessoais.cpf = `${this.dadosPessoais.cpf}.`;
          break;
        case 7:
        this.dadosPessoais.cpf = `${this.dadosPessoais.cpf}.`;
          break;
        case 11:
        this.dadosPessoais.cpf = `${this.dadosPessoais.cpf}-`;
          break;
      }
    }
  }

  preencheNomeCartao() {
    if(this.dadosPessoais.nome !== null && this.dadosPessoais.nome !== undefined) {
      this.dadosPessoais.nome.length < 19? this.nomeCartao = this.dadosPessoais.nome: false;
    }
  }
}
