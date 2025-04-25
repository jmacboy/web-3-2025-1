from django.urls import path, include
from rest_framework import routers

from universidad.apis import AlumnoViewSet, MateriaViewSet, UserViewSet
from universidad.apis.telefono_viewset import TelefonoViewSet

router = routers.DefaultRouter()
router.register('alumnos', AlumnoViewSet)
router.register('materias', MateriaViewSet)
router.register('telefonos', TelefonoViewSet)
router.register("auth", UserViewSet, basename='auth')
urlpatterns = [
    path('', include(router.urls)),
]
