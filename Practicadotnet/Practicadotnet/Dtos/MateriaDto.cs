using Practicadotnet.Models;

namespace Practicadotnet.Dtos
{
    public class MateriaDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public decimal Creditos { get; set; }
        public int Semestre { get; set; }
        public int Docente_Id { get; set; }
    }
}
