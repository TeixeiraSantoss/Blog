using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Models
{
    public class PostagemModel
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public string conteudo { get; set; }

        //Relacionamento de 1 para N com Comentarios
        public ICollection<ComentarioModel> Comentarios { get; set; }
    }
}