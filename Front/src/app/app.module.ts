import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { CadastrarPostagemComponent } from './pages/Postagem/cadastrar-postagem/cadastrar-postagem.component';
import { CadastrarComentarioComponent } from './pages/Comentario/cadastrar-comentario/cadastrar-comentario.component';
import { ListarComentarioComponent } from './pages/Comentario/listar-comentario/listar-comentario.component';
import { ListarPostagemComponent } from './pages/Postagem/listar-postagem/listar-postagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SaibaMaisComponent } from './pages/Postagem/saiba-mais/saiba-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPostagemComponent,
    CadastrarComentarioComponent,
    ListarComentarioComponent,
    ListarPostagemComponent,
    SaibaMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
