import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
