import { AngularMaterialModule } from './shared/modulos-compartilhados/angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './telas/home/home.component';
import { CartoesComponent } from './layout/cartoes/cartoes.component';
import { SolicitarCartaoComponent } from './layout/solicitar-cartao/solicitar-cartao.component';
import { FormsModule } from '@angular/forms';
import { GraficosComponent } from './layout/graficos/graficos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartoesComponent,
    SolicitarCartaoComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
