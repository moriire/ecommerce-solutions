from django.db import models
from datetime import datetime
from rest_framework.serializers import ModelSerializer
from py4paystack import Paystack
pay = Paystack()
class Packages(models.Model):
    DURATIONS=(
                ("annually", "Annually"),
                ("biannually", "Biannually"),
                ("monthly", "Monthly"),
                ('weekly', 'Weekly'),
                ("daily", "Daily"),
            )
    name = models.CharField(max_length=40)#Package name to be determined by the admin
    amount = models.PositiveIntegerField()
    interval = models.CharField(max_length=15, choices=DURATIONS)
    plan_code = models.CharField(max_length=50, blank=True, null=True)
    plan_data = models.JSONField(null=True, blank=True)
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
    """
    def save(self, *args, **kwargs):
        try:
            plan = pay.Plan()(
                name = self.name,
                interval = self.duration,
                amount = self.price
                )
            self.plan_data = plan
        except:
            return
        finally:
            super(Packages, self).save(*args, **kwargs)

    """
    def period(self):
        return datetime.now() - self.created_on


class PackageSerializer(ModelSerializer):
    class Meta:
        model = Packages
        fields = ("id", "name", "interval","amount", "plan_code",)# "plan_data")#"__all__"
