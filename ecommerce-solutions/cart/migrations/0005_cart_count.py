# Generated by Django 5.0.6 on 2024-07-10 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0004_cart_id_alter_cart_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='count',
            field=models.IntegerField(default=1),
        ),
    ]
