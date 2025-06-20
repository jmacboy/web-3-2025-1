using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Practicadotnet.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Practicadotnet.Data
{
    public class PracticadotnetContext : IdentityDbContext<IdentityUser>
    {
        public PracticadotnetContext (DbContextOptions<PracticadotnetContext> options)
            : base(options)
        {
        }

        public DbSet<Practicadotnet.Models.Persona> Persona { get; set; } = default!;
        public DbSet<Practicadotnet.Models.Materia> Materia { get; set; } = default!;
        public DbSet<Practicadotnet.Models.Docente> Docente { get; set; } = default!;
    }
}
