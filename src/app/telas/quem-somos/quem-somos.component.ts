import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss'],
  animations: [
    trigger('container', [
      state('active', style({})),
      transition('inactive => active', [
        animate(3000, keyframes([
          style({
            marginLeft: '-10%'
          }),
        ])),
        animate(3000, keyframes([
          style({
            marginLeft: '0px'
          }),
        ]))
      ]),
    ]),
  ]
})

export class QuemSomosComponent implements OnInit {

  currentState: any;
  constructor() { }

  ngOnInit() {
    this.currentState = 'inactive';
    setTimeout(() => {
      this.currentState = 'active';
    }, 500);
  }

}
