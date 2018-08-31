import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../../shared/models/dados-pessoais.model';
import { Enums } from '../../shared/enums/enums';
import { Validacoes } from '../../shared/validacoes/validacoes';
import {Router} from '@angular/router';
import { CadastroClienteService } from '../../telas/cadastro-cliente/cadastro-cliente.service';

@Component({
  selector: 'app-solicitar-cartao',
  templateUrl: './solicitar-cartao.component.html',
  styleUrls: ['./solicitar-cartao.component.scss']
})
export class SolicitarCartaoComponent implements OnInit {

  dadosPessoais: DadosPessoais;
  nomeCartao: string;
  estadoCpf = true;
  focusEmail = true;
  constructor(private router:Router,
              private service: CadastroClienteService) {
    this.dadosPessoais = new DadosPessoais();
  }

  ngOnInit() {
  }
  apenasCaracteres(teclaPressionada: KeyboardEvent) {
    this.preencheNomeCartao();
    return new RegExp(Enums.LETRAS_E_ESPACO).test(teclaPressionada.key) ? true : false;
  }
  validarEmail() {
    this.focusEmail = new RegExp(Enums.EMAIL).test(this.dadosPessoais.email) ? true : false;
  }
  apenasNumeros(teclaPressionada: KeyboardEvent) {
    return new RegExp(Enums.NUMERICO).test(teclaPressionada.key) ? true : false;
  }
  validarCpf() {
    if (this.dadosPessoais.cpf !== undefined &&
      this.dadosPessoais.cpf !== null) {
      this.dadosPessoais.cpf.length === 14 ?
        this.estadoCpf = Validacoes.validarCpf(this.dadosPessoais.cpf) : false;
    }

  }
  mascaraCpf(teclaPressionada: KeyboardEvent) {

    if (!this.apenasNumeros(teclaPressionada)) {
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
    if (this.dadosPessoais.nome !== null && this.dadosPessoais.nome !== undefined) {
      this.dadosPessoais.nome.length < 19 ? this.nomeCartao = this.dadosPessoais.nome : false;
    }
  }
  solicitarCartao() {
    this.service.preencherDados(this.dadosPessoais);
    this.router.navigate(['/cadastro-cliente']);
  }
}
