# Generated by Django 5.1 on 2024-08-21 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('thumb', '0003_remove_productwithimage_is_approved_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productwithimage',
            name='status',
            field=models.CharField(choices=[('APPROVED', 'Approved'), ('REJECTED', 'Rejected'), ('PENDING', 'Pending')], default=('PENDING', 'Pending'), max_length=8),
        ),
    ]
