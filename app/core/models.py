from django.db import models

# Create your models here.


class Register(models.Model):
    email = models.EmailField(max_length=254, unique=True)
    age = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    favorite_social = models.CharField(max_length=100)
    time_day_facebook = models.CharField(max_length=100)
    time_day_whatsapp = models.CharField(max_length=100)
    time_day_twitter = models.CharField(max_length=100)
    time_day_instagram = models.CharField(max_length=100)
    time_day_tiktok = models.CharField(max_length=100)

    def __str__(self):
        return self.email

class SelectGender(models.Model):
    gender = (
        ('18-25', '18-25'),
        ('26-33', '26-33'),
        ('34-40', '34-40'),
        ('+40', '+40'),
    )