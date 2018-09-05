import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('container', [
      state('inactive', style({
        marginLeft: '-100%',
        opacity: '0'
      })),
      transition('inactive => active', [
        animate(6000, keyframes([
          style({
            marginLeft: '0',
            opacity: '1 '
          }),
        ])),
      ]),
    ]),
    trigger('cartoes', [
      state('inactive', style({
        marginLeft: '400px',
        opacity: '0'
      })),
      transition('inactive => active', [
        animate(6000, keyframes([
          style({
            marginLeft: '0px',
            opacity: '1 '
          }),
        ])),
      ]),
    ]),
  ]
})

export class HomeComponent implements OnInit {

  currentState: any;
  constructor() { }

  ngOnInit() {
    this.currentState = 'inactive';
    setTimeout(() => {
      this.currentState = 'active';
    }, 500);
  }

}
