# Generated by Django 5.0.6 on 2024-08-11 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0005_cart_count'),
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='cart',
            field=models.ManyToManyField(blank=True, null=True, related_name='ordered_cart', to='cart.cart'),
        ),
    ]