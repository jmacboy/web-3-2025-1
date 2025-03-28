from django.urls import path, include
from rest_framework import routers

from universidad.apis import AlumnoViewSet, MateriaViewSet
from universidad.apis.telefono_viewset import TelefonoViewSet

router = routers.DefaultRouter()
router.register('alumnos', AlumnoViewSet)
router.register('materias', MateriaViewSet)
router.register('telefonos', TelefonoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
