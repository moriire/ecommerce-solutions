# Generated by Django 4.0.6 on 2022-09-16 15:05

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
            name='Thumbs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(null=True, upload_to='products')),
                ('uploaded_on', models.DateTimeField(auto_now_add=True)),
                ('level', models.IntegerField(default=0)),
                ('caption', models.CharField(max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_thumb', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
