import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ComentarioModel } from 'src/app/models/comentario.model';
import { PostagemModel } from 'src/app/models/postagem.model';

@Component({
  selector: 'app-alterar-postagem',
  templateUrl: './alterar-postagem.component.html',
  styleUrls: ['./alterar-postagem.component.css']
})
export class AlterarPostagemComponent {
  constructor(private client: HttpClient, private route: ActivatedRoute, private router: Router) {}

  routeId: number = 0
  postagemId: number = 0
  titulo: string = ""
  conteudo: string = ""

  ngOnInit(): void
  {
    //Recuperando o "id" da URL
    this.route.params.subscribe
    ({
      next: (parametros) => 
        {
          let {id} = parametros;

          this.routeId = id

          this.client.get<PostagemModel>
            (`https://localhost:7130/api/postagem/buscar/${id}`).subscribe
            ({
              next: (postagem) => 
                {
                  this.titulo = postagem.titulo
                  this.conteudo = postagem.conteudo
                }
            })
        }
    })
  }

  alterar(): void
  {
    let postagem: PostagemModel = 
    {
      id: this.postagemId,
      titulo: this.titulo,
      conteudo: this.conteudo,
      Comentarios: []
    }

    this.client.post<PostagemModel>
      (`https://localhost:7130/api/postagem/alterar/${this.routeId}`, postagem).subscribe
      ({
        next: () => 
          {
            console.log("Postagem Alterada com sucesso")
          },
        error: (erro) =>
          {
            console.log(erro)
          }
      })
  }

  deletar(): void
  {
    this.client.delete
      (`https://localhost:7130/api/postagem/excluir/${this.routeId}`).subscribe
      ({
        next: () =>
          {
            console.log("Postagem excluida")
          },
        error: (erro) =>
          {
            console.log(erro)
          }
      })
  }
}
