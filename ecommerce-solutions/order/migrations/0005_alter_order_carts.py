# Generated by Django 5.1 on 2024-08-25 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0005_cart_count'),
        ('order', '0004_order_authorization_code_order_reference_code_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='carts',
            field=models.ManyToManyField(blank=True, to='cart.cart'),
        ),
    ]
