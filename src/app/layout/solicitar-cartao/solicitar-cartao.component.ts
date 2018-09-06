import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../../shared/models/dados-pessoais.model';
import { Enums } from '../../shared/enums/enums';
import { Validacoes } from '../../shared/validacoes/validacoes';
import { Router } from '@angular/router';
import { CadastroClienteService } from '../../telas/cadastro-cliente/cadastro-cliente.service';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-solicitar-cartao',
  templateUrl: './solicitar-cartao.component.html',
  styleUrls: ['./solicitar-cartao.component.scss']
})
export class SolicitarCartaoComponent implements OnInit {

  dadosPessoais: DadosPessoais;
  nomeCartao: string;
  estadoCpf = true;
  estadoEmail: boolean;
  constructor(private router: Router,
    private service: CadastroClienteService) {
    this.dadosPessoais = new DadosPessoais();
    this.dadosPessoais.endereco = new Endereco();
  }

  ngOnInit() {
  }

  public apenasCaracteres(teclaPressionada: KeyboardEvent): boolean {
    this.preencheNomeCartao();
    return new RegExp(Enums.LETRAS_E_ESPACO).test(teclaPressionada.key) ? true : false;
  }

  public validarEmail(): void {
    this.estadoEmail = new RegExp(Enums.EMAIL).test(this.dadosPessoais.email) ? true : false;
  }

  public apenasNumeros(teclaPressionada: KeyboardEvent): boolean {
    return new RegExp(Enums.NUMERICO).test(teclaPressionada.key) ? true : false;
  }

  public validarCpf(): void {
    if (this.dadosPessoais.cpf) {
      this.dadosPessoais.cpf.length === 14 ?
        this.estadoCpf = Validacoes.validarCpf(this.dadosPessoais.cpf) : false;
    }
  }
  public mascaraCpf(teclaPressionada: KeyboardEvent): boolean {

    if (!this.apenasNumeros(teclaPressionada)) {
      return false;
    }
    if (this.dadosPessoais.cpf) {
      this.dadosPessoais.cpf = Validacoes.mascaraCpf(this.dadosPessoais.cpf);
    }
  }

  private preencheNomeCartao(): void {
    if (this.dadosPessoais.nome !== null && this.dadosPessoais.nome !== undefined) {
      this.dadosPessoais.nome.length < 19 ? this.nomeCartao = this.dadosPessoais.nome : false;
    }
  }

  public solicitarCartao(): void {
    this.service.preencherDados(this.dadosPessoais);
    this.router.navigate(['/cadastro-cliente']);
  }
}
