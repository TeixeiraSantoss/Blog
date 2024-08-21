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
            // Verifica se já existe uma postagem com o mesmo ID
            PostagemModel? postagemExistente = _ctx.Postagens.FirstOrDefault(p => p.id == postagem.id);

            if (postagemExistente != null)
            {
                return BadRequest("Uma postagem com o mesmo ID já existe.");
            }

            // Adiciona a nova postagem ao banco de dados
            PostagemModel novaPostagem = new PostagemModel
            {
                titulo = postagem.titulo,
                conteudo = postagem.conteudo
            };

            _ctx.Postagens.Add(novaPostagem);
            _ctx.SaveChanges();

            return Created("Postagem criada com sucesso", novaPostagem);
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

    [HttpPost("alterar/{id}")]
    public IActionResult Alterar([FromRoute] int id, [FromBody] PostagemModel postagem)
    {
        try
        {
            //Buscando um objeto com o "id" fornecido
            PostagemModel? postagemCadastrada = _ctx.Postagens.Find(id);
            
            if(postagemCadastrada != null)
            {
                postagemCadastrada.titulo = postagem.titulo;
                postagemCadastrada.conteudo = postagem.conteudo;

                _ctx.Postagens.Update(postagemCadastrada);
                _ctx.SaveChanges();

                return Ok("Postagem alterada");
            }

            return NotFound("Nenhuma postagem correspondente");
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }

    //Alterar Fim
    //
    
    //
    //Excluir Inicio

    [HttpDelete("excluir/{id}")]
    public IActionResult Excluir([FromRoute] int id)
    {
        try
        {
            PostagemModel? postagemCadastrada = _ctx.Postagens.Find(id);

            if(postagemCadastrada != null)
            {
                _ctx.Postagens.Remove(postagemCadastrada);
                _ctx.SaveChanges();

                return Ok("Postagem excluida");
            }

            return NotFound("Nenhuma postagem encontrada");
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }

    //Excluir Fim
    //
    
}