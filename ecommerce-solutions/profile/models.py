from django.db import models
from django.utils.translation import gettext as _
from django.utils import timezone
from users.models import CustomUsers
from rest_framework import serializers
from django.template.defaultfilters import slugify # new
#from utils import image_resize
class LocationPricing(models.Model):
    state = models.CharField(max_length=20)
    price = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.state} {self.price}"
    
class Profile(models.Model):
    user = models.OneToOneField(CustomUsers, related_name="user_profile", on_delete=models.CASCADE, primary_key=True)
    img = models.ImageField(_("upload image"),  upload_to="store/banner", null=True, blank=True)
    store_name = models.CharField(max_length=100, unique=True)
    store_slug = models.SlugField(unique=True, editable=False)
    address = models.TextField(blank=True, null=True)
    location = models.ForeignKey(LocationPricing, blank=True, null=True, on_delete=models.CASCADE, related_name="location_pricing")
    merchandise = models.TextField(blank=True, null=True)
    facebook = models.URLField()
    instagram = models.URLField()
    twitter = models.URLField()
    viewed_by = models.ManyToManyField(CustomUsers, related_name="profile_viewed_by", blank=True,)

    def __str__(self):
        return str(self.username)

    def save(self, *args, **kwargs):
        if not self.store_slug:
            self.store_slug = slugify(self.store_name)
            return super().save(*args, **kwargs)
   

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUsers
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "phone",
            "img",
            "vendor",
            "subscribe")


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class ProfileExpandSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = "__all__"
        #depth = 2
