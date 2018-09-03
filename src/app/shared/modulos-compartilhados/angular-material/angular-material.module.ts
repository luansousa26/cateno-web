import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatToolbarModule, 
          MatCardModule, 
          MatInputModule,
          MatOptionModule,
          MatSelectModule,
          MatButtonToggleModule,
          MatAutocompleteModule} from '@angular/material';
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
    MatAutocompleteModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
