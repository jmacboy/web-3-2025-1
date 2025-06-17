using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticaWebApi.Data;
using PracticaWebApi.Migrations;
using PracticaWebApi.Models;

namespace PracticaWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadosController : ControllerBase
    {
        private readonly PracticaWebApiContext _context;

        public EmpleadosController(PracticaWebApiContext context)
        {
            _context = context;
        }

        // GET: api/Empleados
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleado>>> GetEmpleado()
        {
            return await _context.Empleado.ToListAsync();
        }

        // GET: api/Empleados/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empleado>> GetEmpleado(int id)
        {
            var empleado = await _context.Empleado.FindAsync(id);

            if (empleado == null)
            {
                return NotFound();
            }

            return empleado;
        }

        // PUT: api/Empleados/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpleado(int id, Empleado empleado)
        {
            if (id != empleado.EmpleadoId)
            {
                return BadRequest();
            }

            _context.Entry(empleado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpleadoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Empleados
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Empleado>> PostEmpleado(EmpleadoDto empleadoDto)
        {
            Departamento? dpto = _context.Departamento.Find(empleadoDto.DepartamentoId);
            if (dpto == null)
            {
                return NotFound("Dpto not found");
            }
            Empleado empleadoDB = new Empleado
            {
                Nombres = empleadoDto.Nombres,
                Apellidos = empleadoDto.Apellidos,
                Edad = empleadoDto.Edad,
                Ciudad = empleadoDto.Ciudad,
                FechaNacimiento = empleadoDto.FechaNacimiento,
                Salario = empleadoDto.Salario,
                Departamento = dpto
            };
            _context.Empleado.Add(empleadoDB);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmpleado", new { id = empleadoDB.EmpleadoId }, empleadoDB);
        }

        // DELETE: api/Empleados/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpleado(int id)
        {
            var empleado = await _context.Empleado.FindAsync(id);
            if (empleado == null)
            {
                return NotFound();
            }

            _context.Empleado.Remove(empleado);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("{id}/profile")]
        public async Task<IActionResult> UploadFile(int id, IFormFile file)
        {
            var empleado = await _context.Empleado.FindAsync(id);
            if (empleado == null)
            {
                return NotFound();
            }
            if (file == null || file.Length == 0)
                return BadRequest("No se ha cargado ningún archivo.");

            var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/empleados");

            if (!Directory.Exists(folderPath))
                Directory.CreateDirectory(folderPath);


            var filePath = Path.Combine(folderPath, id.ToString() + ".jpg");

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var url = $"{Request.Scheme}://{Request.Host}/empleados/"+ id.ToString() + ".jpg";
            return Ok(new { url });
        }

        private bool EmpleadoExists(int id)
        {
            return _context.Empleado.Any(e => e.EmpleadoId == id);
        }
    }
}
