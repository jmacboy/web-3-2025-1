from django.db import models

from universidad.models import Docente


class Materia(models.Model):
    nombre = models.CharField(max_length=100)
    creditos = models.IntegerField()

    # Foreign Keys
    docente = models.ForeignKey(
        Docente,
        on_delete=models.CASCADE,
        related_name="materias",
        null=True,
    )

    def __str__(self):
        return self.nombre
