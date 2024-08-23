# Generated by Django 5.1 on 2024-08-23 10:37

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0004_order_shipping_order_status'),
        ('thumb', '0005_alter_productwithimage_status'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='authorization_code',
            field=models.CharField(blank=True, max_length=16, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='reference_code',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.CreateModel(
            name='Ordered',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=1)),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ordered_product', to='thumb.productwithimage')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='preorder_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='order',
            name='carts',
            field=models.ManyToManyField(blank=True, to='order.ordered'),
        ),
    ]
