from django.db import models

from universidad.models import Alumno


class Telefono(models.Model):
    numero = models.CharField(max_length=15)
    tipo = models.CharField(max_length=10)

    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE, related_name='telefonos')

    def __str__(self):
        return self.numero