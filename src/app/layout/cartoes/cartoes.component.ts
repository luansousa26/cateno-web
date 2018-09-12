import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss']
})
export class CartoesComponent implements OnInit {

  cardTexto = 'Emissão de meios de pagamento pré-pagos';
  cadeadoText = 'Inteligência em autorização e fraude';
  pagamentoText = 'Gestão estratégica de meios de pagamento';
  private controladorCard = 0;
  private controladorCadeado = 0;
  private controladorPagamento = 0;
  constructor() { }

  ngOnInit() {

  }
  @HostListener('window:scroll', [])
  private scrollAnimate(): void {
    if (window.pageYOffset > 650) {
      document.getElementById('iphone-imagem').style.marginTop = '75px';
      this.animacaoTextoCard();
      this.animacaoTextoCadeado();
      this.animacaoTextoPagamento();
    }
    if (window.pageYOffset < 650 || window.pageYOffset === 900) {
      document.getElementById('iphone-imagem').style.marginTop = '6px';
    }
  }

  private animacaoTextoCard(): void {
    if (this.controladorCard < this.cardTexto.length) {
      document.getElementById('card-texto').innerHTML += this.cardTexto.charAt(this.controladorCard);
      this.controladorCard++;
      setTimeout(() => {
        this.animacaoTextoCard();
      }, 120);
    }
  }

  private animacaoTextoCadeado(): void {
    if (this.controladorCadeado < this.cadeadoText.length) {
      document.getElementById('cadeado-texto').innerHTML += this.cadeadoText.charAt(this.controladorCadeado);
      this.controladorCadeado++;
      setTimeout(() => {
        this.animacaoTextoCadeado();
      }, 120);
    }
  }

  private animacaoTextoPagamento(): void {
    if (this.controladorPagamento < this.pagamentoText.length) {
      document.getElementById('pagamento-texto').innerHTML += this.pagamentoText.charAt(this.controladorPagamento);
      this.controladorPagamento++;
      setTimeout(() => {
        this.animacaoTextoPagamento();
      }, 120);
    }
  }
}

