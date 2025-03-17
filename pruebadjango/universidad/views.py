from django.http import HttpResponse
from django.shortcuts import render, redirect

from universidad.models import Alumno


# Create your views here.
def index(request):
    return render(
        request,
        "universidad/index.html",
        {}
    )


def hola(request):
    return HttpResponse("Hola Mundo")


def alumnoslist(request):
    alumnos = Alumno.objects.all()
    return render(
        request,
        "universidad/alumnos/list.html",
        {"alumnos": alumnos}
    )


def alumnoscreate(request):
    if request.method == "POST":
        nombre = request.POST.get("nombre")
        apellido = request.POST.get("apellido")
        registro = request.POST.get("registro")
        ciudad = request.POST.get("ciudad")
        edad = request.POST.get("edad")
        fecha_nacimiento = request.POST.get("fecha_nacimiento")
        alumno = Alumno(
            nombre=nombre,
            apellido=apellido,
            registro=registro,
            ciudad=ciudad,
            edad=edad,
            fecha_nacimiento=fecha_nacimiento
        )
        alumno.save()
        return redirect("alumnos")
    return render(
        request,
        "universidad/alumnos/form.html",
        {}
    )
