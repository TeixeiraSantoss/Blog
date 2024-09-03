using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back.Migrations
{
    public partial class ModelUpda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Postagens_PostagemId",
                table: "Comentarios");

            migrationBuilder.RenameColumn(
                name: "PostagemId",
                table: "Comentarios",
                newName: "postagemId");

            migrationBuilder.RenameIndex(
                name: "IX_Comentarios_PostagemId",
                table: "Comentarios",
                newName: "IX_Comentarios_postagemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comentarios_Postagens_postagemId",
                table: "Comentarios",
                column: "postagemId",
                principalTable: "Postagens",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Postagens_postagemId",
                table: "Comentarios");

            migrationBuilder.RenameColumn(
                name: "postagemId",
                table: "Comentarios",
                newName: "PostagemId");

            migrationBuilder.RenameIndex(
                name: "IX_Comentarios_postagemId",
                table: "Comentarios",
                newName: "IX_Comentarios_PostagemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comentarios_Postagens_PostagemId",
                table: "Comentarios",
                column: "PostagemId",
                principalTable: "Postagens",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
