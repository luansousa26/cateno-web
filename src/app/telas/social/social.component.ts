import {Component, OnInit, Inject, HostListener} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],

})

export class SocialComponent implements OnInit {
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
      document.getElementById('mat-card-4').classList.add('fadeInLeft');
    }
    if (window.pageYOffset > 1000 ) {
      document.getElementById('mat-card-5').classList.add('fadeInLeft');
    }
    if (window.pageYOffset > 1330 ) {
      document.getElementById('mat-card-6').classList.add('fadeInUp');
    }
  }
}
