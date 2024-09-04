import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioModel } from 'src/app/models/comentario.model';
import { PostagemModel } from 'src/app/models/postagem.model';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.css']
})
export class SaibaMaisComponent {
  constructor(private client: HttpClient, private route: ActivatedRoute) {}

  comentariosFiltrados: ComentarioModel[] = []

  comentarios: ComentarioModel[] = []
  ultimoId: number = 0
  conteudoComentario: string = ""
  
  postagemId: number = 0
  cPostagemId:number = 0
  titulo: string = ""
  conteudo: string = ""
  mostrarComentarios: boolean = false;

  ngOnInit(): void {
    // "route.params" dá acesso aos parâmetros da rota
    this.route.params.subscribe({
      next: (parametros) => {
        // "parametros" vai receber as informações presentes na "rota" e "id" vai receber essas informações
        let { id } = parametros;
  
        // Requisição para obter a postagem
        this.client.get<PostagemModel>(`https://localhost:7130/api/postagem/buscar/${id}`).subscribe({
          next: (postagem) => {
            this.postagemId = postagem.id;
            this.titulo = postagem.titulo;
            this.conteudo = postagem.conteudo;
            console.table(postagem);
  
            // Agora que temos o ID da postagem, requisitamos os comentários
            this.carregarComentarios();
          },
          error: (erro) => {
            console.log(erro);
          }
        });
      }
    });
  }
  
  cadastrarComentario(): void
  {
    let novoComentario: ComentarioModel =
    {
      id: this.ultimoId,
      conteudo: this.conteudoComentario,
      postagemId: this.postagemId
    }

    this.client.post
      ("https://localhost:7130/api/comentario/cadastrar", novoComentario).subscribe
      ({
        next: () =>
          {
            console.log("comentario cadastrado")
            this.carregarComentarios()
            this.limparComentario()
          },
        error: (erro) =>
          {
            console.log(erro)
          }
      })
  }

  carregarComentarios(): void 
  {    
    // Requisição para obter a lista de comentários
    this.client.get<ComentarioModel[]>("https://localhost:7130/api/comentario/listar").subscribe({
      next: (comentarios) => {
        this.comentarios = comentarios;

        // Filtrando os comentários após carregá-los
        this.filtrarComentarios(); 

        // console.table(this.comentarios);
        //Trecho para obter o ultimoId
        if(comentarios.length > 0)
          {
            //Obtendo a ultima postagem do array
            const ultimoComentario: ComentarioModel = comentarios[comentarios.length - 1]

            //Obtendo o id da ultimaPosttagem e incrementando em +1
            if(ultimoComentario.id !== undefined)
              {
                 this.ultimoId = (ultimoComentario.id += 1)
                 console.log("ultimo id: " + this.ultimoId)     
              } else
                {
                  console.log("Não foi possivel encontrar o ultimo comentario cadastrado")
                }
          } else
            {
              console.log("Lista de comentarios vazia")
            }
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }
  
  filtrarComentarios(): void 
  {
    this.comentariosFiltrados = this.comentarios.filter(c => c.postagemId === this.postagemId)
  }

  limparComentario(): void
  {
    this.conteudoComentario = ""
  }
}
