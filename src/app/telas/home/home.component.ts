import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.alterarCorNavBarPreto();
  }
  @HostListener('window:scroll', [])
  private animacaoNavbar(): void {
    if (window.pageYOffset > 420) {
      this.alterarCorNavBarBranca();
    }
    if (window.pageYOffset < 420) {
      this.alterarCorNavBarPreto();
    }
  }

  private alterarCorNavBarBranca(): void {
    document.getElementById('navbar').style.background = 'white';
    this.alterarCor('#77787b');
  }
  private alterarCorNavBarPreto(): void {
    document.getElementById('navbar').style.background = 'rgba(0, 0, 0, 0.54)';
    this.alterarCor('white');
  }

  private alterarCor(cor: string): void {
    const itemsMenu = document.getElementsByClassName('menu-itens') as HTMLCollectionOf<HTMLElement>;;
    for (let i = 0; i < itemsMenu.length; i++) {
      itemsMenu[i].style.color = cor;
    }
  }

  ngOnDestroy(): void {
    this.alterarCorNavBarBranca();
  }
}
