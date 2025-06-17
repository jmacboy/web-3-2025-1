using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Practicadotnet.Migrations
{
    /// <inheritdoc />
    public partial class AddDocentes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DocenteId",
                table: "Materia",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Docente",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefono = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docente", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Materia_DocenteId",
                table: "Materia",
                column: "DocenteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Materia_Docente_DocenteId",
                table: "Materia",
                column: "DocenteId",
                principalTable: "Docente",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Materia_Docente_DocenteId",
                table: "Materia");

            migrationBuilder.DropTable(
                name: "Docente");

            migrationBuilder.DropIndex(
                name: "IX_Materia_DocenteId",
                table: "Materia");

            migrationBuilder.DropColumn(
                name: "DocenteId",
                table: "Materia");
        }
    }
}
