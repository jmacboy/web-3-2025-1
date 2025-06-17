namespace PracticaWebApi.Models
{
    public class Departamento
    {
        public int DepartamentoId { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Empleado> Empleados { get; set; }

    }
}
