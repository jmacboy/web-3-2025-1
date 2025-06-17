namespace PracticaWebApi.Models
{
    public class EmpleadoDto
    {
        public int EmpleadoId { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int Edad { get; set; }
        public string Ciudad { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public decimal Salario { get; set; }
        public int DepartamentoId { get; set; }
    }
}
