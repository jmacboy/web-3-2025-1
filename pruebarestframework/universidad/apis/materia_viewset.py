from rest_framework import serializers, viewsets

from universidad.models import Materia


class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = '__all__'


class MateriaViewSet(viewsets.ModelViewSet):
    queryset = Materia.objects.all()
    serializer_class = MateriaSerializer
    filterset_fields = ['nombre', 'codigo', 'creditos']
    search_fields = ['nombre', 'codigo']
    ordering_fields = ['nombre', 'codigo', 'creditos']
