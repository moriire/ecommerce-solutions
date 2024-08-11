import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models

class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cart', '0005_cart_count'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now=True)),
                ('cart', models.ManyToManyField(blank=True, null=True, related_name='ordered_by', to='cart.cart')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]