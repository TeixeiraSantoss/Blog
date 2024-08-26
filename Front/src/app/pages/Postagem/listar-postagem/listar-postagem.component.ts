import { PostagemModel } from 'src/app/models/postagem.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-postagem',
  templateUrl: './listar-postagem.component.html',
  styleUrls: ['./listar-postagem.component.css']
})
export class ListarPostagemComponent {
  constructor(private client: HttpClient) {}

  postagens: PostagemModel[] = []

  ngOnInit(): void
  {
    this.client.get<PostagemModel[]>
    ("https://localhost:7130/api/postagem/listar")
      .subscribe
      ({
        next: (postagens) =>
          {
            this.postagens = postagens
            console.table(this.postagens);
          },
        error: (erro) =>
          {
            console.log(erro);    
          }
      })
  }
}
