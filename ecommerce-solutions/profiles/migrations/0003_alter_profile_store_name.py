# Generated by Django 4.0.6 on 2022-09-24 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_alter_profile_store_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='store_name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
