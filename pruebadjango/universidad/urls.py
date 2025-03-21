from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("hola", views.hola, name="hola"),
    path("alumnos", views.alumnoslist, name="alumnos"),
    path("alumnos/create", views.alumnoscreate, name="alumnoscreate"),

    path("alumnos/<int:id>", views.alumnosupdate, name="alumnosupdate"),
    path("alumnos/<int:id>/delete", views.alumnosdelete, name="alumnosdelete"),

    path("materias", views.materia_list, name="materias_list"),
    path("materias/create", views.materia_create, name="materias_create"),
    path("materias/<int:id>", views.materias_edit, name="materias_edit"),
    path("materias/<int:id>/delete", views.materias_delete, name="materias_delete"),

]
