using Back.Models;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers;

[ApiController]
[Route("api/comentario")]
public class ComentarioController: ControllerBase
{
    //contexto do banco
    private readonly Context _ctx;

    //construtor
    public ComentarioController(Context ctx)
    {
        _ctx = ctx;
    }

    //
    //Cadastrar Inicio

    [HttpPost("cadastrar")]
    public IActionResult Cadastrar([FromBody] ComentarioModel comentario)
    {
        try
        {
            // Verifica se a postagem existe
            var postagem = _ctx.Postagens.FirstOrDefault(p => p.id == comentario.PostagemId);
            
            if (postagem == null)
            {
                return NotFound("A postagem não foi encontrada.");
            }

            // Adiciona o comentário ao contexto
            // ComentarioModel novoComentario = new ComentarioModel
            // {
            //     conteudo = comentario.conteudo
            // };

            _ctx.Comentarios.Add(comentario);
            _ctx.SaveChanges();

            return Created("Comentario adicionado com sucesso", comentario);
        }
        catch (Exception e)
        {
            return BadRequest($"Erro ao adicionar comentário: {e.Message}");
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
            List<ComentarioModel> comentarios = _ctx.Comentarios.ToList();

            return comentarios.Count == 0 ? NotFound("Nenhum comentario encontrado") : Ok(comentarios);
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
    public IActionResult Alterar([FromRoute] int id, [FromBody] ComentarioModel comentaio)
    {
        try
        {
            ComentarioModel comentaioExistente = _ctx.Comentarios.Find(id);

            if(comentaioExistente != null)
            {
                comentaioExistente.conteudo = comentaio.conteudo;

                _ctx.Comentarios.Update(comentaioExistente);
                _ctx.SaveChanges();

                return Ok("Comentario alterado com sucesso");
            }

            return NotFound("Nenhum comentario encontrado");
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
            ComentarioModel comentarioExistente = _ctx.Comentarios.Find(id);

            if(comentarioExistente != null)
            {
                _ctx.Comentarios.Remove(comentarioExistente);
                _ctx.SaveChanges();

                return Ok("Comentario excluido com sucesso");
            }

            return NotFound("Nenhum comentario encontrado");
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }

    //Excluir Fim
    //
}