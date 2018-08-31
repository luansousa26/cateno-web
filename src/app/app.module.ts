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
import {QuemSomosComponent} from './telas/quem-somos/quem-somos.component';
import { PrimeNGModule } from './shared/modulos-compartilhados/primeng/primeng.module';
import { CadastroClienteComponent } from './telas/cadastro-cliente/cadastro-cliente.component';
import {AppRoutingModule} from './shared/routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartoesComponent,
    SolicitarCartaoComponent,
    GraficosComponent,
    CadastroClienteComponent,
    QuemSomosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PrimeNGModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
