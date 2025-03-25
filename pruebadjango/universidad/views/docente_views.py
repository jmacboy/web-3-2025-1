from django.views.generic import ListView, CreateView, UpdateView, DeleteView

from universidad.models import Docente


class DocenteListView(ListView):
    model = Docente
    template_name = "universidad/docentes/list.html"


class DocenteCreateView(CreateView):
    model = Docente
    template_name = "universidad/docentes/form.html"
    fields = "__all__"
    success_url = "/universidad/docentes"


class DocenteUpdateView(UpdateView):
    model = Docente
    template_name = "universidad/docentes/form.html"
    fields = "__all__"
    success_url = "/universidad/docentes"


class DocenteDeleteView(DeleteView):
    model = Docente
    success_url = "/universidad/docentes"
