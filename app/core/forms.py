from django import forms
from django.forms.fields import ChoiceField
from .models import Register, SelectGender


class RegisterPolls(forms.ModelForm):
    class Meta:
        model = Register
        fields = [
            'email',
            'age',
            'gender',
            'favorite_social',
            'time_day_facebook',
            'time_day_whatsapp',
            'time_day_twitter',
            'time_day_instagram',
            'time_day_tiktok'
        ]
        # Widgets se utilizara boostrap
        widgets = {
            'email': forms.EmailInput(attrs={'Placeholder': 'Correo Electrónico'}),
            'age': forms.TextInput(attrs={'Placeholder': 'Seleccione un rango de edad'}),
            'gender': forms.TextInput(attrs={'Placeholder': 'Seleccione un genero'}),
            'favorite_social': forms.TextInput(attrs={'Placeholder': 'Red social favorita'}),
            'time_day_facebook': forms.TextInput(attrs={'Placeholder': 'Tiempo promedio al día en Facebook'}),
            'time_day_whatsapp': forms.TextInput(attrs={'Placeholder': 'Tiempo promedio al día en WhatsApp'}),
            'time_day_twitter': forms.TextInput(attrs={'Placeholder': 'Tiempo promedio al día en Twitter'}),
            'time_day_instagram': forms.TextInput(attrs={'Placeholder': 'Tiempo promedio al día en Instagram'}),
            'time_day_tiktok': forms.TextInput(attrs={'Placeholder': 'Tiempo promedio al día en Tiktok'}),
        }

        labels = {
            'email': 'Correo electronico',
            'age': 'Seleccione un rango de edad',
            'gender': 'Seleccione un genero',
            'favorite_social': 'Red social favorita',
            'time_day_facebook' : 'Tiempo promedio al día en Facebook',
            'time_day_whatsapp' : 'Tiempo promedio al día en WhatsApp',
            'time_day_twitter' : 'Tiempo promedio al día en Twitter',
            'time_day_instagram': 'Tiempo promedio al día en Instagram',
            'time_day_tiktok' : 'Tiempo promedio al día en Tiktok'
        }
