# Generated by Django 4.2.13 on 2024-06-21 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='store_name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
