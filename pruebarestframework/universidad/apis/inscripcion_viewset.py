from rest_framework import serializers, viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.validators import UniqueValidator

from universidad.apis import AlumnoSimpleSerializer, MateriaSerializer
from universidad.models import Inscripcion, Alumno, Materia


class InscripcionSerializer(serializers.ModelSerializer):
    alumno_id = serializers.PrimaryKeyRelatedField(
        queryset=Alumno.objects.all(),
        source='alumno',
        write_only=True,
    )
    alumno = AlumnoSimpleSerializer(
        read_only=True,
        many=False,
    )
    materias_id = serializers.PrimaryKeyRelatedField(
        queryset=Materia.objects.all(),
        source='materias',
        write_only=True,
        many=True
    )
    materias = MateriaSerializer(
        read_only=True,
        many=True
    )

    class Meta:
        model = Inscripcion
        fields = '__all__'


class InscripcionViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Inscripcion.objects.all()
    serializer_class = InscripcionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # Check if the student is already has an inscription
        alumno_id = serializer.validated_data['alumno'].id
        if Inscripcion.objects.filter(alumno_id=alumno_id).exists():
            return Response({'error': 'El alumno ya tiene una inscripción'}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


