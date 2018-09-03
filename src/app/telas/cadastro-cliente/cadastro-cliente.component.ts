import { Component, OnInit } from '@angular/core';
import { CadastroClienteService } from './cadastro-cliente.service';
import { DadosPessoais } from '../../shared/models/dados-pessoais.model';
import { itemsFiltro } from '../../shared/models/items-filtro-model';
import { AutocompleteFuncoes } from '../../shared/funcoes/autocomplete-funcoes';
import { MAT_DATE_LOCALE } from '@angular/material';
import { Endereco } from '../../shared/models/endereco.model';
import { Enums } from '../../shared/enums/enums';
import { Validacoes } from '../../shared/validacoes/validacoes';
@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ]
})
export class CadastroClienteComponent implements OnInit {

  estados: itemsFiltro[] = [];
  estadosFiltrados: itemsFiltro[] = [];

  orgaos: itemsFiltro[] = [];
  orgaosFiltrados: itemsFiltro[] = [];

  nacionalidades: itemsFiltro[] = [];
  nacionalidadesFiltradas: itemsFiltro[] = [];

  dadosPessoais: DadosPessoais;
  estadoCpf = true;
  estadoCep = true;
  estadoEmail = true;

  constructor(private service: CadastroClienteService) {
    this.dadosPessoais = new DadosPessoais();
    this.dadosPessoais.endereco = new Endereco();
  }

  ngOnInit() {
    this.preencherEstados();
    this.preencherOrgaos();
    this.preencherNacionalidades();
    this.carregarDados();
  }

  private carregarDados(): void {
    if (this.service.devolverDados()) {
      this.dadosPessoais = this.service.devolverDados();
    }
  }

  public apenasNumeros(teclaPressionada: KeyboardEvent): boolean {
    return new RegExp(Enums.NUMERICO).test(teclaPressionada.key) ? true : false;
  }
  public apenasCaracteres(teclaPressionada: KeyboardEvent): boolean {
    return new RegExp(Enums.LETRAS_E_ESPACO).test(teclaPressionada.key) ? true : false;
  }

  public filtrarEstados(): void {
    this.estadosFiltrados = AutocompleteFuncoes.filtro(this.dadosPessoais.estadorEmissor, this.estados);
  }
  public filtrarOrgaos(): void {
    this.orgaosFiltrados = AutocompleteFuncoes.filtro(this.dadosPessoais.orgaoExpedidor, this.orgaos);
  }

  public filtrarNacionalidades(): void {
    this.nacionalidadesFiltradas = AutocompleteFuncoes.filtro(this.dadosPessoais.nacionalidade, this.nacionalidades);
  }
  private preencherEstados(): void {
    this.service.buscarEstados().subscribe((estados: itemsFiltro[]) => {
      this.estados = estados;
    });
  }

  private preencherOrgaos(): void {
    this.service.buscarOrgaos().subscribe((orgaos: itemsFiltro[]) => {
      this.orgaos = orgaos;
    });
  }

  private preencherNacionalidades(): void {
    this.service.buscarNacionalidades().subscribe((nacionalidades: itemsFiltro[]) => {
      this.nacionalidades = nacionalidades;
    });
  }

  private buscarCepViaCep(cep: string): void {
    this.service.buscarEndereco(cep).subscribe((endereco: Endereco) => {
      this.estadoCep = endereco.cep ? true : false;
      this.estadoCep ? this.dadosPessoais.endereco = endereco : false;
    });
  }

  public validarCpf(): void {
    if (this.dadosPessoais.cpf) {
      this.dadosPessoais.cpf.length === 14 ?
        this.estadoCpf = Validacoes.validarCpf(this.dadosPessoais.cpf) : false;
    }
  }
  public mascararCpf(teclaPressionada: KeyboardEvent): boolean {
    if (!this.apenasNumeros(teclaPressionada)) {
      return false;
    }
    if (this.dadosPessoais.cpf) {
      this.dadosPessoais.cpf = Validacoes.mascaraCpf(this.dadosPessoais.cpf);
    }
  }

  public mascararCep(teclaPressionada: KeyboardEvent): boolean {
    if (!this.apenasNumeros(teclaPressionada)) {
      return false;
    }
    if (this.dadosPessoais.endereco.cep &&
      this.dadosPessoais.endereco.cep.length === 5) {
      this.dadosPessoais.endereco.cep = `${this.dadosPessoais.endereco.cep}-`
    }
  }

  public buscarCep(): void {
    if (this.dadosPessoais.endereco.cep.length === 9) {
      const endereco = this.dadosPessoais.endereco.cep.replace(/[^0-9]+/g, '');
      this.buscarCepViaCep(endereco);
    }
  }

  public validarEmail(): void {
    this.estadoEmail = new RegExp(Enums.EMAIL).test(this.dadosPessoais.email) ? true : false;
  }

  public validarTelefone(tecla: KeyboardEvent, tipoTelefone: string): boolean {
    if (this.apenasNumeros(tecla)) {
      switch (tipoTelefone) {
        case 'F':
          this.dadosPessoais.telefone = Validacoes.validarMascaraTelefoneFixo(this.dadosPessoais.telefone);
          break;
        case 'C':
          this.dadosPessoais.celular = Validacoes.validarMascaraTelefoneFixo(this.dadosPessoais.celular);
          break;
      }
    } else {
      return false;
    }
  }
}
