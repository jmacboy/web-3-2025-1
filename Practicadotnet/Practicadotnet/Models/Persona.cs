namespace Practicadotnet.Models
{
    public class Persona
    {
        //private string _nombre;
        //public string Nombre
        //{
        //    get { return _nombre; }
        //    set { _nombre = value; }
        //}
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public DateOnly FechaNacimiento { get; set; }
        public string Ciudad { get; set; }
        public string Telefono { get; set; }
    }
}
