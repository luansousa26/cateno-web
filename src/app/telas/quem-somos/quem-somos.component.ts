import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss'],

})

export class QuemSomosComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  scrollAnimate() {
    if (window.pageYOffset > 216 ) {
      document.getElementById('mat-card').classList.add('fadeInLeft');
    }
  }
}
