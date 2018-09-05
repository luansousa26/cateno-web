import {Component, OnInit, Inject, HostListener, AfterViewChecked, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss'],

})

export class QuemSomosComponent implements OnInit {
  noWrapSlides = false;
  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  scrollAnimate() {
    console.log(window.pageYOffset);

    if (window.pageYOffset > 216 ) {
      document.getElementById('mat-card').classList.add('fadeInLeft');
    }
    if (window.pageYOffset > 637 ) {
      document.getElementById('hist').classList.add('fadeInUp');
    }
    if (window.pageYOffset > 756 ) {
      document.querySelector('.carousel').classList.add('rollIn');
    }
    if (window.pageYOffset > 1080 ) {
      document.querySelector('.footer').classList.add('fadeInUp');
    }
  }
}
