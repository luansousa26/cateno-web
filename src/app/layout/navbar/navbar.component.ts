import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuvisivel = false;
  constructor() { }

  ngOnInit() {
  }
  mostrarMenu() {
    if (this.menuvisivel === false) {
      this.abrirMenu();
    } else {
      this.fecharMenu();
    }
  }

  abrirMenu() {
    document.getElementById('menu-hide').style.background = 'rgba(163, 206, 34, 0.541)';
    document.getElementById('menu-hide').style.height = '200px';
    document.getElementById('menu-hide').style.transition = 'height 4s ease-in';
    setTimeout(() => {
      document.getElementById('menus-responsividade').style.display = 'block';
    }, 4000);
    this.menuvisivel = true;
  }
  fecharMenu() {
    document.getElementById('menu-hide').style.background = 'rgba(163, 206, 34, 0.541)';
    document.getElementById('menu-hide').style.height = '2px';
    document.getElementById('menu-hide').style.transition = 'height 4s ease-out';
    this.menuvisivel = false;
    setTimeout(() => {
      document.getElementById('menus-responsividade').style.display = 'none';
    }, 900);
    setTimeout(() => {
      document.getElementById('menu-hide').style.background = 'transparent';
    }, 4000);
  }
}
