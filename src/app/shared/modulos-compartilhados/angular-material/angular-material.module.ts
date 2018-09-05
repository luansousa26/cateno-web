import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }    
  ],
  declarations: []
})
export class AngularMaterialModule { }
