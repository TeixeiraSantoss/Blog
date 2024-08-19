using Back.Models;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers;

[ApiController]
[Route("api/postagem")]
public class PostagemController: ControllerBase
{
    
    //Contexto do Banco
    private readonly Context _ctx;

    //Construtor
    public PostagemController(Context ctx)
    {
        _ctx = ctx;
    }

    //
    //Cadrastrar Inicio

    [HttpPost("cadastrar")]
    public IActionResult Cadastrar([FromBody] PostagemModel postagem)
    {
        try
        {
            //Verificar se o objeto enviado ja tem algum correspondente no BD
            PostagemModel? postagemCadastrada = _ctx.Postagens.FirstOrDefault(p => p.id == postagem.id);

            if(postagemCadastrada != null)
            {
                PostagemModel novaPostagem = new PostagemModel
                {
                    titulo = postagem.titulo,
                    conteudo = postagem.conteudo
                };

                //Adiciona a "novaPostagem" a tabela "Postagens" do Banco
                _ctx.Postagens.Add(novaPostagem);

                //Salva as alterações feitas
                _ctx.SaveChanges();

                return Created("Postagem criada com sucesso", novaPostagem);
            }

            return BadRequest("Não foi possivel criar a Postagem");
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }

    //Cadastrar Fim
    //

    //
    //Listar Inicio

    [HttpGet("listar")]
    public IActionResult Listar()
    {
        try
        {
            //Criar uma lista de postagens que vai receber todas as postagens salvas no Banco
            List<PostagemModel> postagens = _ctx.Postagens.ToList();

            //Retornar a lista como resposta para a requisição
            return postagens.Count == 0 ? NotFound("Nenhuma postagem encontrada") : Ok(postagens);
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }

    //Listar Fim
    //
    
    //
    //Alterar Inicio

    

    //Alterar Fim
    //
    
    //
    //Excluir Inicio



    //Excluir Fim
    //
    
}