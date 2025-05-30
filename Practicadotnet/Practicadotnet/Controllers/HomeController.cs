using Microsoft.AspNetCore.Mvc;

namespace Practicadotnet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        [HttpGet()]
        public List<string> Index()
        {
            return new string[] {
                "Juan Perez",
                "Maria Lopez",
                "Carlos Sanchez",
            }.ToList();
        }
    }
}
