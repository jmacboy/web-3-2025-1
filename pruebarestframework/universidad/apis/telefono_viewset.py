from rest_framework import serializers, viewsets

from universidad.apis import AlumnoSerializer, AlumnoSimpleSerializer
from universidad.models import Telefono, Alumno


class TelefonoSerializer(serializers.ModelSerializer):
    alumno_id = serializers.PrimaryKeyRelatedField(
        queryset=Alumno.objects.all(),
        source='alumno',
        write_only=True
    )
    alumno = AlumnoSimpleSerializer(
        read_only=True,
        many=False
    )

    class Meta:
        model = Telefono
        fields = '__all__'


class TelefonoViewSet(viewsets.ModelViewSet):
    queryset = Telefono.objects.all()
    serializer_class = TelefonoSerializer
