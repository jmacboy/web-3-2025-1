namespace PracticaWebApi.Models
{
    public class DepartamentoDto
    {
        public int DepartamentoId { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<SimpleEmpleadoDto> Empleados { get; set; }
    }
}
