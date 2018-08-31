import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatToolbarModule, 
          MatCardModule, 
          MatInputModule,
          MatOptionModule,
          MatSelectModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
