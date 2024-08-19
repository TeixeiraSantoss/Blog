namespace Back.Models;
public class ComentarioModel
{
    public int id { get; set; }
    public string conteudo { get; set; }

    //Chave estrangeira para Postagem
    public int PostagemId { get; set; }
    public PostagemModel Postagem { get; set; }
}