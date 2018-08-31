import { Component, OnInit } from '@angular/core';
import { CadastroClienteService } from './cadastro-cliente.service';
import { DadosPessoais } from '../../shared/models/dados-pessoais.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  dadosPessoais: DadosPessoais;
  constructor(private service: CadastroClienteService) { 
    this.dadosPessoais = new DadosPessoais();
  }

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    if(this.service.devolverDados()) {
      this.dadosPessoais = this.service.devolverDados();
    }
  }

}
