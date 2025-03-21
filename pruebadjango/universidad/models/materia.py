from django.db import models


class Materia(models.Model):
    nombre = models.CharField(max_length=100)
    creditos = models.IntegerField()

    def __str__(self):
        return self.nombre
