import { Component, OnInit } from '@angular/core';
import { CadastroClienteService } from './cadastro-cliente.service';
import { DadosPessoais } from '../../shared/models/dados-pessoais.model';
import { itemsFiltro } from '../../shared/models/items-filtro-model';
import { AutocompleteFuncoes } from '../../shared/funcoes/autocomplete-funcoes';
import { MAT_DATE_LOCALE } from '@angular/material';


@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
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

  constructor(private service: CadastroClienteService) {
    this.dadosPessoais = new DadosPessoais();
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
}
