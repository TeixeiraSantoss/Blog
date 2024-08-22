import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarPostagemComponent } from './pages/Postagem/cadastrar-postagem/cadastrar-postagem.component';
import { CadastrarComentarioComponent } from './pages/Comentario/cadastrar-comentario/cadastrar-comentario.component';
import { ListarComentarioComponent } from './pages/Comentario/listar-comentario/listar-comentario.component';
import { ListarPostagemComponent } from './pages/Postagem/listar-postagem/listar-postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPostagemComponent,
    CadastrarComentarioComponent,
    ListarComentarioComponent,
    ListarPostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
