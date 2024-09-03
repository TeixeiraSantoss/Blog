import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisComponent } from './pages/Postagem/saiba-mais/saiba-mais.component';
import { CadastrarPostagemComponent } from './pages/Postagem/cadastrar-postagem/cadastrar-postagem.component';
import { ListarPostagemComponent } from './pages/Postagem/listar-postagem/listar-postagem.component';
import { AlterarPostagemComponent } from './pages/Postagem/alterar-postagem/alterar-postagem.component';

const routes: Routes = 
[
  {
    path:"",
    component: AlterarPostagemComponent
  },
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
  },
  {
    path:"pages/postagem/alterar/:id",
    component: AlterarPostagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
