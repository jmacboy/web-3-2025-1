from django import forms

from universidad.models import Materia


class MateriaForm(forms.ModelForm):
    nombre = forms.CharField(
        label="Nombre",
        widget=forms.TextInput(attrs={"class": "form-control"})
    )
    creditos = forms.IntegerField(
        label="Creditos",
        widget=forms.NumberInput(attrs={"class": "form-control"})
    )

    class Meta:
        model = Materia
        fields = ["nombre", "creditos"]
