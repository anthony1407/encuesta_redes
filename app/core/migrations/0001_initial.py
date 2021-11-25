# Generated by Django 3.2.9 on 2021-11-24 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('age', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=100)),
                ('favorite_social', models.CharField(max_length=100)),
                ('time_day_facebook', models.CharField(max_length=100)),
                ('time_day_whatsapp', models.CharField(max_length=100)),
                ('time_day_twitter', models.CharField(max_length=100)),
                ('time_day_instagram', models.CharField(max_length=100)),
                ('time_day_tiktok', models.CharField(max_length=100)),
            ],
        ),
    ]