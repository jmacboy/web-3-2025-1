from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("hola", views.hola, name="hola"),
    path("alumnos", views.alumnoslist, name="alumnos"),
    path("alumnos/create", views.alumnoscreate, name="alumnoscreate"),

]
