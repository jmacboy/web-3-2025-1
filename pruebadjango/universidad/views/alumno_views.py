from django.shortcuts import render, redirect

from universidad.models import Alumno, Materia, PerfilAlumno


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

        materias_inscritas = request.POST.getlist("materias_inscritas")

        direccion = request.POST.get("direccion")
        telefono = request.POST.get("telefono")

        alumno = Alumno(
            nombre=nombre,
            apellido=apellido,
            registro=registro,
            ciudad=ciudad,
            edad=edad,
            fecha_nacimiento=fecha_nacimiento
        )

        alumno.save()
        for materia_id in materias_inscritas:
            materia = Materia.objects.get(id=materia_id)
            alumno.materias_inscritas.add(materia)
        alumno.save()

        alumno.perfil = PerfilAlumno(
            alumno=alumno,
            direccion=direccion,
            telefono=telefono
        )
        alumno.perfil.save()
        return redirect("alumnos")
    materias = Materia.objects.all()
    return render(
        request,
        "universidad/alumnos/form.html",
        {
            "materias": materias
        }
    )


def alumnosupdate(request, id):
    alumno = Alumno.objects.get(id=id)
    if request.method == "POST":
        nombre = request.POST.get("nombre")
        apellido = request.POST.get("apellido")
        registro = request.POST.get("registro")
        ciudad = request.POST.get("ciudad")
        edad = request.POST.get("edad")
        # print(request.POST)
        fecha_nacimiento = request.POST.get("fecha_nacimiento")
        materias_inscritas = request.POST.getlist("materias_inscritas")
        direccion = request.POST.get("direccion")
        telefono = request.POST.get("telefono")

        alumno.nombre = nombre
        alumno.apellido = apellido
        alumno.registro = registro
        alumno.ciudad = ciudad
        alumno.edad = edad
        alumno.fecha_nacimiento = fecha_nacimiento
        alumno.materias_inscritas.clear()
        for materia_id in materias_inscritas:
            materia = Materia.objects.get(id=materia_id)
            alumno.materias_inscritas.add(materia)
        alumno.save()
        perfil = alumno.perfil
        perfil.direccion = direccion
        perfil.telefono = telefono
        perfil.save()
        return redirect("alumnos")
    materias = Materia.objects.all()
    for materia in materias:
        if materia in alumno.materias_inscritas.all():
            materia.is_selected = True
        else:
            materia.is_selected = False
    return render(
        request,
        "universidad/alumnos/form.html",
        {"alumno": alumno, "materias": materias}
    )


def alumnosdelete(request, id):
    alumno = Alumno.objects.get(id=id)
    alumno.delete()
    return redirect("alumnos")
