from django.db import models

from universidad.models import Alumno


class Inscripcion(models.Model):
    id = models.AutoField(primary_key=True)
    fecha_inscripcion = models.DateField(auto_now_add=True)

    # foreign keys
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE, related_name='inscripciones')
    materias = models.ManyToManyField('universidad.Materia', related_name='inscripciones')
