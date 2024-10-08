from django.db import models
from django.utils.translation import gettext as _
from django.utils import timezone
from django.contrib.auth import get_user_model
from users.serializers import UsersSerializer
from rest_framework import serializers
from django.template.defaultfilters import slugify # new

User = get_user_model()
#from utils import image_resize
class LocationPricing(models.Model):
    state = models.CharField(max_length=20)
    price = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.state} {self.price}"
    
class Profile(models.Model):
    user = models.OneToOneField(User, related_name="user_profile", on_delete=models.CASCADE, primary_key=True)
    img = models.ImageField(_("upload image"),  upload_to="store/banner", null=True, blank=True)
    store_name = models.CharField(max_length=100, unique=True)
    store_slug = models.SlugField(unique=True, editable=False)
    address = models.TextField(blank=True, null=True)
    location = models.ForeignKey(LocationPricing, blank=True, null=True, on_delete=models.CASCADE, related_name="location_pricing")
    merchandise = models.TextField(blank=True, null=True)
    facebook = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    viewed_by = models.ManyToManyField(User, related_name="profile_viewed_by", blank=True,)

    def __str__(self):
        return str(self.user.username)

    def save(self, *args, **kwargs):
        if not self.store_slug:
            self.store_slug = slugify(self.store_name)
            return super().save(*args, **kwargs)
   

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class ProfileExpandSerializer(serializers.ModelSerializer):
    user = UsersSerializer()
    class Meta:
        model = Profile
        fields = "__all__"
        #depth = 2
