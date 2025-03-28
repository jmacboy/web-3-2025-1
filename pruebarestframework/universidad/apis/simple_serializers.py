from rest_framework import serializers

from universidad.models import Alumno


class AlumnoSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = ['id', 'nombres', 'apellidos', 'registro']