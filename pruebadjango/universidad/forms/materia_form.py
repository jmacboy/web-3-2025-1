from django import forms

from universidad.models import Materia


class MateriaForm(forms.ModelForm):
    class Meta:
        model = Materia
        fields = ["nombre", "creditos"]
