# Generated by Django 5.0.6 on 2024-07-08 11:33

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='user_profile', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('img', models.ImageField(blank=True, null=True, upload_to='store/banner', verbose_name='upload image')),
                ('store_name', models.CharField(max_length=100, unique=True)),
                ('store_slug', models.SlugField(editable=False, unique=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('merchandise', models.TextField(blank=True, null=True)),
                ('facebook', models.URLField()),
                ('instagram', models.URLField()),
                ('twitter', models.URLField()),
                ('viewed_by', models.ManyToManyField(blank=True, related_name='profile_viewed_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
