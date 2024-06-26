from django.db import models
from django.utils.translation import gettext as _
from django.utils import timezone
from users.models import CustomUsers
from rest_framework import serializers
from django.template.defaultfilters import slugify # new
#from utils import image_resize

class Profile(models.Model):
    user = models.OneToOneField(CustomUsers, related_name="user_profile", on_delete=models.CASCADE)
    img = models.ImageField(_("upload image"),  upload_to="store/banner", null=True, blank=True
)
    store_name = models.CharField(max_length=100, unique=True)
    store_slug = models.SlugField(primary_key=True, unique=True, editable=False)
    address = models.TextField(blank=True, null=True)
    merchandise = models.TextField(blank=True, null=True)
    facebook = models.URLField()
    instagram = models.URLField()
    twitter = models.URLField()
    viewed_by = models.ManyToManyField(CustomUsers, related_name="profile_viewed_by", null=True, blank=True,)

    def __str__(self):
        return self.store_name

    def save(self, *args, **kwargs):
        if not self.store_slug:
            self.store_slug = slugify(self.store_name)
            return super().save(*args, **kwargs)
   

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUsers
        fields = (
            "id",
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
