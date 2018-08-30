import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatToolbarModule, 
          MatCardModule, 
          MatInputModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
