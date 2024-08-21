from django.db import models
from users.models import CustomUsers

class LocationPriceModel(models.Model):
    city = models.CharField("city", max_length=20, null=True, blank=True)
    price = models.FloatField(default=0.0)

    def __str__(self):
        return self.city
    class Meta:
        verbose_name = "Product Shipping"
        verbose_name_plural = "Shipping Informations"
        
class Shipping(models.Model):
    created_by = models.OneToOneField(CustomUsers, on_delete=models.CASCADE, related_name="shipping_user")
    first_name = models.CharField("First Name", max_length=30, null=True, blank=True)
    last_name = models.CharField("Last Name", max_length=30, null=True, blank=True)
    email = models.EmailField("Email", null=True, blank=True)
    city = models.ForeignKey(LocationPriceModel, on_delete=models.CASCADE, related_name="shipping_city", null=True, blank=True)
    country = models.CharField("Country", max_length=24, default="Nigeria")
    address = models.CharField("Address", max_length=128, null=True, blank=True)
    zip_code = models.CharField("Zip Code", max_length=8, null=True, blank=True)

    def __str__(self) -> str:
        return self.city.city
    