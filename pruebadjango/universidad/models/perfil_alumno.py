from django.db import models

from universidad.models import Alumno


class PerfilAlumno(models.Model):
    alumno = models.OneToOneField(
        Alumno,
        on_delete=models.CASCADE,
        related_name="perfil"
    )
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.alumno.nombre} {self.alumno.apellido}"
