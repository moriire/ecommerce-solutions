from django.db import models
from profiles.models import Profile
class Shipping(models.Model):
    user = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="profile_address")
    city = models.CharField("city", max_length=20)
    country = models.CharField("Country", max_length=24, default="Nigeria")
    address_1 = models.CharField("Address 1", max_length=128)
    address_2 = models.CharField("Address 2", max_length=128)
    zip_code = models.CharField("Zip Code", max_length=8)