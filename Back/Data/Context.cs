using Back.Models;
using Microsoft.EntityFrameworkCore;

public class Context: DbContext
{
    public Context(DbContextOptions<Context> options): base(options){ }
    
     public DbSet<PostagemModel> Postagens { get; set; }
     public DbSet<ComentarioModel> Comentarios { get; set; }

     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlite("Data Source=blog.db");
        }
    }
}