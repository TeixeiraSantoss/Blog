using System.Text.Json.Serialization;

namespace Back.Models;
public class ComentarioModel
{
    public int id { get; set; }
    public string conteudo { get; set; }

    //Chave estrangeira para Postagem
    public int postagemId { get; set; }
    [JsonIgnore]
    public PostagemModel? Postagem { get; set; }
}