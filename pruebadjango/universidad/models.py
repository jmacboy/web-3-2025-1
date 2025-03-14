from django.db import models

class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    registro = models.CharField(max_length=10)
    ciudad = models.CharField(max_length=100)
    edad = models.IntegerField()
    fecha_nacimiento = models.DateField()