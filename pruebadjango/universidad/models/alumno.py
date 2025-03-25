from django.db import models

from universidad.models import Materia


class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    registro = models.CharField(max_length=10)
    ciudad = models.CharField(max_length=100)
    edad = models.IntegerField()
    fecha_nacimiento = models.DateField()

    # Foreign Keys
    materias_inscritas = models.ManyToManyField(
        Materia,
        related_name="alumnos"
    )
