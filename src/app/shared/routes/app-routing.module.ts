import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../telas/home/home.component';
import { CadastroClienteComponent } from '../../telas/cadastro-cliente/cadastro-cliente.component';
import {QuemSomosComponent} from '../../telas/quem-somos/quem-somos.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  /*{ path: 'solucoes', component: SolucoesComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'social', component: SocialComponent },
  { path: 'contato', component: ContatoComponent },*/
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
