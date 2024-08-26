import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisComponent } from './pages/Postagem/saiba-mais/saiba-mais.component';
import { CadastrarPostagemComponent } from './pages/Postagem/cadastrar-postagem/cadastrar-postagem.component';
import { ListarPostagemComponent } from './pages/Postagem/listar-postagem/listar-postagem.component';

const routes: Routes = 
[
  {
    path:"pages/postagem/listar",
    component: ListarPostagemComponent
  },
  {
    path:"pages/postagem/cadastrar",
    component: CadastrarPostagemComponent
  },
  {
    path:"pages/postagem/buscar/:id",
    component: SaibaMaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
