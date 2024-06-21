from django.db import models
from datetime import datetime
from rest_framework.serializers import ModelSerializer
from users.models import CustomUsers
#from py4paystack import Paystack
#pay = Paystack()
class Packages(models.Model):
    #user = models.OneToOneField(CustomUsers, on_delete=models.CASCADE, related_name="user_package", primary_key=True)
    name = models.CharField(max_length=40, default="free")#Package name to be determined by the admin
    amount = models.PositiveIntegerField(default=0)
    plan_code = models.CharField(max_length=50, null=True, blank=True)
    interval = models.CharField(max_length=20, blank=True)
    description = models.TextField(blank=True, null=True)
    enabled = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

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
        fields = ("id", "name", "amount", "interval", "plan_code", 'description')# "plan_data")#"__all__"
