# Generated by Django 4.2.13 on 2024-06-21 12:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Packages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='free', max_length=40)),
                ('amount', models.PositiveIntegerField(default=0)),
                ('plan_code', models.CharField(blank=True, max_length=50, null=True)),
                ('interval', models.CharField(blank=True, max_length=20)),
                ('description', models.TextField(blank=True, null=True)),
                ('enabled', models.BooleanField(default=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_package', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Package',
                'verbose_name_plural': 'Packages',
            },
        ),
    ]
