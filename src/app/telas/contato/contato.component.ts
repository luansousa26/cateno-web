import {Component, OnInit, Inject, HostListener} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {ContatoModel} from './contato.model';
import {itemsFiltro} from '../../shared/models/items-filtro-model';
import {AutocompleteFuncoes} from '../../shared/funcoes/autocomplete-funcoes';
import { CadastroClienteService } from '../cadastro-cliente/cadastro-cliente.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],

})

export class ContatoComponent implements OnInit {

  dadosPessoais: ContatoModel;
  estados: itemsFiltro[] = [];
  estadosFiltrados: itemsFiltro[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,
              private service: CadastroClienteService) {

  }
  ngOnInit() {
    this.preencherEstados();
    this.dadosPessoais =  new class implements ContatoModel {
      assunto: string;
      email: string;
      empresa: string;
      estado: string;
      mensagem: string;
      nome: string;
      telefone: string;
    };
  }
  public filtrarEstados(): void {
    this.estadosFiltrados = AutocompleteFuncoes.filtro(this.dadosPessoais.estado, this.estados);
  }

  private preencherEstados(): void {
    this.service.buscarEstados().subscribe((res: itemsFiltro[]) => {
      this.estados = res;
    });
  }
  enviarContato() {
    console.log(this.dadosPessoais);
  }
  @HostListener('window:scroll', [])
  scrollAnimate() {
    console.log(window.pageYOffset);

    if (window.pageYOffset > 100 ) {
      document.getElementById('notend').classList.add('fadeInUp');
    }

    if (window.pageYOffset > 175 ) {
      document.getElementById('end').classList.add('fadeInLeft');
    }

  }
}


