namespace Practicadotnet.Models
{
    public class Docente
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public virtual ICollection<Materia> Materias { get; set; }
    }
}
