from django.db import models
from users.models import CustomUsers
from products.models import Products
from datetime import datetime 
from rest_framework.serializers import ModelSerializer

class Packages(models.Model):
    DURATIONS=(
                ("Monthly", "monthly"),
            )
    name = models.CharField(max_length=20)
    price = models.PositiveIntegerField()
    duration = models.CharField(max_length=7, choices=DURATIONS)
    enabled = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = ("Package")
        verbose_name_plural = ("Packages")
    def __str__(self):
        return self.name

    def price_kobo(self):
        return self.price_naira*100

    def flash_time(self):
        return self.package*60

    def period(self):
        return datetime.now() - self.created_on


class PackageSerializer(ModelSerializer):
    class Meta:
        model = Packages
        fields = "__all__"
