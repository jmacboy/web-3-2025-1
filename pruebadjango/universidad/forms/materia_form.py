from django import forms

from universidad.models import Materia, Docente


class MateriaForm(forms.ModelForm):
    nombre = forms.CharField(
        label="Nombre",
        widget=forms.TextInput(attrs={"class": "form-control"})
    )
    creditos = forms.IntegerField(
        label="Creditos",
        widget=forms.NumberInput(attrs={"class": "form-control"})
    )
    docente = forms.ModelChoiceField(
        label="Docente",
        queryset=Docente.objects.all(),
        widget=forms.Select(attrs={"class": "form-select"}),
        empty_label="Selecciona un docente",
        required=False
    )

    class Meta:
        model = Materia
        fields = ["nombre", "creditos", "docente"]
