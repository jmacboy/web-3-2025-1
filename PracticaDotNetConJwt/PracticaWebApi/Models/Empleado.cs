namespace PracticaWebApi.Models
{
    public class Empleado
    {
        public int EmpleadoId { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int Edad { get; set; }
        public string Ciudad { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public decimal Salario { get; set; }
        
        public Departamento Departamento { get; set; }
    }
}
