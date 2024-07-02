from django.db import models
from profile.models import Profile
class Shipping(models.Model):
    user = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="profile_address")
    first_name = models.CharField("First Name", max_length=30, null=True, blank=True)
    last_name = models.CharField("Last Name", max_length=30, null=True, blank=True)
    email = models.EmailField("Email", null=True, blank=True)
    city = models.CharField("city", max_length=20, null=True, blank=True)
    country = models.CharField("Country", max_length=24, default="Nigeria")
    address_1 = models.CharField("Address 1", max_length=128, null=True, blank=True)
    address_2 = models.CharField("Address 2", max_length=128, null=True, blank=True)
    zip_code = models.CharField("Zip Code", max_length=8, null=True, blank=True)