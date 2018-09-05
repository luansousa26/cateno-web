// Modules Imports
import { AngularMaterialModule } from './shared/modulos-compartilhados/angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './shared/routes/app-routing.module';
import {MatListModule} from '@angular/material/list';
import { CarouselModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from './shared/modulos-compartilhados/primeng/primeng.module';

// Components Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './telas/home/home.component';
import { SocialComponent } from './telas/social/social.component';
import { CartoesComponent } from './layout/cartoes/cartoes.component';
import {ContatoComponent} from './telas/contato/contato.component';
import { GraficosComponent } from './layout/graficos/graficos.component';
import {QuemSomosComponent} from './telas/quem-somos/quem-somos.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CadastroClienteComponent } from './telas/cadastro-cliente/cadastro-cliente.component';
import { SolicitarCartaoComponent } from './layout/solicitar-cartao/solicitar-cartao.component';
import {InteligenciaFraudeComponent} from './telas/solucoes/inteligencia-fraude/inteligencia-fraude.component';
import { DialogoCartaoComponent } from './telas/cadastro-cliente/dialog-cartao/dialogo-cartao.component';

// Services Imports
import { CadastroClienteService } from './telas/cadastro-cliente/cadastro-cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartoesComponent,
    SolicitarCartaoComponent,
    GraficosComponent,
    CadastroClienteComponent,
    FooterComponent,
    QuemSomosComponent,
    SocialComponent,
    ContatoComponent,
    InteligenciaFraudeComponent,
    DialogoCartaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PrimeNGModule,
    FormsModule,
    AppRoutingModule,
    MatListModule,
    CarouselModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    DialogoCartaoComponent
  ],
  providers: [
    CadastroClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
