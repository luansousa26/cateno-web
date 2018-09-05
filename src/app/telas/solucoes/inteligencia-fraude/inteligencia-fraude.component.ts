import {Component, OnInit, Inject, HostListener} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';


@Component({
  selector: 'app-inteligenciafraude',
  templateUrl: './inteligencia-fraude.component.html',
  styleUrls: ['./inteligencia-fraude.component.scss'],

})

export class InteligenciaFraudeComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  ngOnInit() {
  }


}
