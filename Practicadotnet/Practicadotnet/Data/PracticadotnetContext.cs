﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Practicadotnet.Models;

namespace Practicadotnet.Data
{
    public class PracticadotnetContext : DbContext
    {
        public PracticadotnetContext (DbContextOptions<PracticadotnetContext> options)
            : base(options)
        {
        }

        public DbSet<Practicadotnet.Models.Persona> Persona { get; set; } = default!;
    }
}
