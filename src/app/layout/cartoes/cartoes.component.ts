import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss']
})
export class CartoesComponent implements OnInit {

  animacao: string = 'false';
  constructor() { }

  ngOnInit() {
    this.iniciarAnimacao();
  }
  iniciarAnimacao() {
    setTimeout(() => {
      this.animacao = 'true';
    }, 500);
  }
}

