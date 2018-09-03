import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.scss'],
  animations: [
    trigger('cartoes', [
      state('false', style({
        opacity: '0.5'
      })),
      transition('false => true', [
        animate(4000, keyframes([
          style({
            opacity: '1 '
          }),
        ])),
      ]),
    ]),
  ]
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

