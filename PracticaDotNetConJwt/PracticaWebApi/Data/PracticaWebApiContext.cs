using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PracticaWebApi.Models;

namespace PracticaWebApi.Data
{
    public class PracticaWebApiContext : IdentityDbContext<IdentityUser>
    {
        public PracticaWebApiContext (DbContextOptions<PracticaWebApiContext> options)
            : base(options)
        {
        }

        public DbSet<PracticaWebApi.Models.Empleado> Empleado { get; set; } = default!;
        public DbSet<PracticaWebApi.Models.Departamento> Departamento { get; set; } = default!;
    }
}
