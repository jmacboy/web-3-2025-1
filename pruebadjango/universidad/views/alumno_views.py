from django.shortcuts import render, redirect

from universidad.models import Alumno


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


def alumnosupdate(request, id):
    alumno = Alumno.objects.get(id=id)
    if request.method == "POST":
        nombre = request.POST.get("nombre")
        apellido = request.POST.get("apellido")
        registro = request.POST.get("registro")
        ciudad = request.POST.get("ciudad")
        edad = request.POST.get("edad")
        fecha_nacimiento = request.POST.get("fecha_nacimiento")
        alumno.nombre = nombre
        alumno.apellido = apellido
        alumno.registro = registro
        alumno.ciudad = ciudad
        alumno.edad = edad
        alumno.fecha_nacimiento = fecha_nacimiento
        alumno.save()
        return redirect("alumnos")

    return render(
        request,
        "universidad/alumnos/form.html",
        {"alumno": alumno}
    )


def alumnosdelete(request, id):
    alumno = Alumno.objects.get(id=id)
    alumno.delete()
    return redirect("alumnos")
