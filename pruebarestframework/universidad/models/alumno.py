from django.db import models


class Alumno(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    edad = models.IntegerField()
    fecha_nacimiento = models.DateField()
    registro = models.CharField(max_length=20)
    profile_picture = models.ImageField(upload_to='profile_pictures/')
