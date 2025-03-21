from django.shortcuts import redirect, render

from universidad.forms import MateriaForm
from universidad.models import Materia


def materia_list(request):
    materias = Materia.objects.all()
    return render(
        request,
        "universidad/materias/list.html",
        {"materias": materias}
    )


def materia_create(request):
    form = MateriaForm()

    if request.method == "POST":
        form = MateriaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("materias_list")

    return render(
        request,
        "universidad/materias/form.html",
        {"form": form}
    )


def materias_edit(request, id):
    materia = Materia.objects.get(id=id)
    if request.method == "POST":
        form = MateriaForm(request.POST, instance=materia)
        if form.is_valid():
            form.save()
            return redirect("materias_list")

    form = MateriaForm(instance=materia)
    return render(
        request,
        "universidad/materias/form.html",
        {"form": form}
    )


def materias_delete(request, id):
    materia = Materia.objects.get(id=id)
    materia.delete()
    return redirect("materias_list")
