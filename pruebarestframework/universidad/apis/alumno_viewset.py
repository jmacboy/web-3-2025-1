from rest_framework import serializers, viewsets
from rest_framework.permissions import IsAuthenticated

from universidad.models import Alumno


class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = '__all__'


class AlumnoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer
