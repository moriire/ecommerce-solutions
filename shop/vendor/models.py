from django.db import models
from users.models import Users
from rest_framework import serializers

from django.template.defaultfilters import slugify # new


class Vendor(models.Model):
    user = models.OneToOneField(Users, on_delete=models.DO_NOTHING, related_name="user_profile")
    vendor = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(null=True, blank=True, unique=True, editable=False)
    address = models.TextField()
    merchandise = models.TextField()
    def __str__(self):
        return "{}-{}".format(self.user.phone, self.vendor)

    def save(self, *args, **kwargs): # new
        if not self.slug:
            self.slug = slugify(self.vendor)
            return super().save(*args, **kwargs)

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor 
        fields = "__all__"


class VendorUserSerializer(serializers.ModelSerializer):
    user = Users.objects.all()
    class Meta:
        model = Vendor
        fields = (
                "user", 
                "vendor", 
                "address", 
                "merchandise"
                )



# Create your models here.

# Create your models here.
