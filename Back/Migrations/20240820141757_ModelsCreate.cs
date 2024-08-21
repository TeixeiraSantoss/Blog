using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back.Migrations
{
    public partial class ModelsCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Postagens_PostagemId",
                table: "Comentarios");

            migrationBuilder.DropIndex(
                name: "IX_Comentarios_PostagemId",
                table: "Comentarios");

            migrationBuilder.AddColumn<int>(
                name: "PostagemModelid",
                table: "Comentarios",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Comentarios_PostagemModelid",
                table: "Comentarios",
                column: "PostagemModelid");

            migrationBuilder.AddForeignKey(
                name: "FK_Comentarios_Postagens_PostagemModelid",
                table: "Comentarios",
                column: "PostagemModelid",
                principalTable: "Postagens",
                principalColumn: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comentarios_Postagens_PostagemModelid",
                table: "Comentarios");

            migrationBuilder.DropIndex(
                name: "IX_Comentarios_PostagemModelid",
                table: "Comentarios");

            migrationBuilder.DropColumn(
                name: "PostagemModelid",
                table: "Comentarios");

            migrationBuilder.CreateIndex(
                name: "IX_Comentarios_PostagemId",
                table: "Comentarios",
                column: "PostagemId");

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
