# Generated by Django 5.1 on 2024-09-29 06:17

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LocationPriceModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(blank=True, max_length=20, null=True, verbose_name='city')),
                ('price', models.FloatField(default=0.0)),
            ],
            options={
                'verbose_name': 'Product Shipping',
                'verbose_name_plural': 'Shipping Informations',
            },
        ),
        migrations.CreateModel(
            name='Shipping',
            fields=[
                ('created_by', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='shipping_user', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('first_name', models.CharField(blank=True, max_length=30, null=True, verbose_name='First Name')),
                ('last_name', models.CharField(blank=True, max_length=30, null=True, verbose_name='Last Name')),
                ('email', models.EmailField(blank=True, max_length=254, null=True, verbose_name='Email')),
                ('country', models.CharField(default='Nigeria', max_length=24, verbose_name='Country')),
                ('address', models.CharField(blank=True, max_length=128, null=True, verbose_name='Address')),
                ('phone', models.CharField(blank=True, max_length=8, null=True, verbose_name='Phone')),
                ('zip_code', models.CharField(blank=True, max_length=8, null=True, verbose_name='Zip Code')),
                ('city', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shipping_city', to='shipping.locationpricemodel')),
            ],
        ),
    ]
