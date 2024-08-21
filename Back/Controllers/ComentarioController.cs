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
            // Verifica se já existe uma postagem com o mesmo ID
            ComentarioModel? comentarioExistente = _ctx.Comentarios.FirstOrDefault(p => p.id == comentario.id);

            if (comentarioExistente != null)
            {
                return BadRequest("Uma postagem com o mesmo ID já existe.");
            }

            // Adiciona a nova postagem ao banco de dados
            ComentarioModel novaPostagem = new ComentarioModel
            {
                conteudo = comentario.conteudo
            };

            _ctx.Comentarios.Add(novaPostagem);
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



    //Alterar Fim
    //
    
    //
    //Excluir Inicio



    //Excluir Fim
    //
}