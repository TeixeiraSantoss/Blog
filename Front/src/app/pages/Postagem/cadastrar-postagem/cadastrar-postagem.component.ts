import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostagemModel } from 'src/app/models/postagem.model';

@Component({
  selector: 'app-cadastrar-postagem',
  templateUrl: './cadastrar-postagem.component.html',
  styleUrls: ['./cadastrar-postagem.component.css']
})
export class CadastrarPostagemComponent {
  constructor(private client: HttpClient) {}

  //Array de postagem para receber o ultimoId
  postagens: PostagemModel[] = [];

  //Variaveis que vão receber os valores do formulario
  ultimoId: number = 0;
  titulo: string = "";
  conteudo: string = "";

  ngOnInit(): void
  {
    //Requisição para obter um lista de postagens
    this.client.get<PostagemModel[]>
      ("https://localhost:7130/api/postagem/cadastrar")
        .subscribe
          ({
            next: (postagens) =>
            {
              console.table(postagens)
              this.postagens = postagens

              //Trecho para obter o ultimoId
              if(postagens.length > 0)
              {
                //Obtendo a ultima postagem do array
                const ultimaPostagem: PostagemModel = postagens[postagens.length - 1]

                //Obtendo o id da ultimaPosttagem e incrementando em +1
                if(ultimaPostagem.id !== undefined)
                  {
                     this.ultimoId = (ultimaPostagem.id += 1)
                     console.log("ultimo id: " + this.ultimoId)     
                  } else
                    {
                      console.log("Não foi possivel encontrar a ultima postagem cadastrada")
                    }
              } else
                {
                  console.log("Lista de postagens vazia")
                }
            },

            error: (erro) =>
            {
              console.log(erro);
            }
          })
  }

  //Função Cadastrar
  cadastrar(): void
  {
    //Objeto com os dados recebidos do formulario
    let postagem: PostagemModel = 
    {
      id: this.ultimoId,
      titulo: this.titulo,
      conteudo: this.conteudo,
      Comentarios: []
    }

    //Requisição enviando o objeto para a API
    this.client.post<PostagemModel>
      ("https://localhost:7130/api/postagem/cadastrar", postagem)
        .subscribe
        ({
          next: () =>
            {
              console.log("Postagem cadastrada com sucesso");
              this.limparFormulario();    
            },
          error: (erro) =>
            {
              console.log(erro);
            }
        })
  }

  //Função para "limpar" o formulario
  limparFormulario(): void
  {
    this.titulo = "";
    this.conteudo = "";
  }
}
