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
    if(this.menuvisivel === false) {
      document.getElementById('menu-hide').style.background = 'rgba(163, 206, 34, 0.541)';
      document.getElementById('menu-hide').style.height = '200px';
      document.getElementById('menu-hide').style.transition = 'height 4s ease-in';
      this.menuvisivel = true;
    }else {
      document.getElementById('menu-hide').style.background = 'rgba(163, 206, 34, 0.541)';
      document.getElementById('menu-hide').style.height = '2px';
      document.getElementById('menu-hide').style.transition = 'height 4s ease-out';
      this.menuvisivel = false;
      setTimeout(() => {
        document.getElementById('menu-hide').style.background = 'white';
      }, 4000);
    }
  }
}
