# Generated by Django 5.1.7 on 2025-03-28 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('universidad', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Materia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('codigo', models.CharField(max_length=20)),
                ('creditos', models.IntegerField()),
            ],
        ),
    ]
