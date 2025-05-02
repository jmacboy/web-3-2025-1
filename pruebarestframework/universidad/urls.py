from django.urls import path, include
from rest_framework import routers

from universidad.apis import AlumnoViewSet, MateriaViewSet, UserViewSet, AuthViewSet, InscripcionViewSet
from universidad.apis.telefono_viewset import TelefonoViewSet

router = routers.DefaultRouter()
router.register('alumnos', AlumnoViewSet)
router.register('materias', MateriaViewSet)
router.register('telefonos', TelefonoViewSet)
router.register("usuarios", UserViewSet, basename='usuarios')
router.register("auth", AuthViewSet, basename='auth')
router.register("inscripciones", InscripcionViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
