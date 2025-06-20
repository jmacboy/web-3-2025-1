using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Practicadotnet.Data;
using Practicadotnet.Dtos;
using Practicadotnet.Models;

namespace Practicadotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class DocentesController : ControllerBase
    {
        private readonly PracticadotnetContext _context;

        public DocentesController(PracticadotnetContext context)
        {
            _context = context;
        }

        // GET: api/Docentes
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Docente>>> GetDocente()
        {
            return await _context.Docente.ToListAsync();
        }

        // GET: api/Docentes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetDocente(int id)
        {
            var docente = await _context.Docente.FindAsync(id);

            if (docente == null)
            {
                return NotFound();
            }

            return docente;
        }

        // PUT: api/Docentes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocente(int id, Docente docente)
        {
            if (id != docente.Id)
            {
                return BadRequest();
            }

            _context.Entry(docente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocenteExists(id))
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

        // POST: api/Docentes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Docente>> PostDocente(DocenteDto docenteDto)
        {
            if (docenteDto == null)
            {
                return BadRequest("Docente data is null.");
            }
            Docente docente = new Docente
            {
                Nombre = docenteDto.Nombre,
                Apellido = docenteDto.Apellido,
                Telefono = docenteDto.Telefono
            };
            _context.Docente.Add(docente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocente", new { id = docente.Id }, docente);
        }

        // DELETE: api/Docentes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocente(int id)
        {
            var docente = await _context.Docente.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }

            _context.Docente.Remove(docente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DocenteExists(int id)
        {
            return _context.Docente.Any(e => e.Id == id);
        }
    }
}
