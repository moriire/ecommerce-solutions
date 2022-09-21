from django.db import models
from django.utils.translation import gettext as _
from django.utils import timezone
from users.models import CustomUsers
from rest_framework import serializers
#from utils import image_resize
"""
class Profile(models.Model):
    user = models.OneToOneField(CustomUsers, related_name="user_profile", on_delete=models.CASCADE)
    img = models.ImageField(_("upload image"),  upload_to="users", null=True, blank=True
)
    company_name = models.CharField(max_length=100, unique=True, blank=True, null=True)
    slug = models.SlugField(null=True, blank=True, unique=True, editable=False)
    address = models.TextField(blank=True, null=True)
    merchandise = models.TextField(blank=True, null=True)
    viewed_by = models.ManyToManyField(CustomUsers, related_name="profile_viewed_by")

    def __str__(self):
        return self.user.email
    
    def absolute_url(self):
        return reverse('flash-detail', args=(self.id,))
    
    def save(self, *args, **kwargs):
        if self.img:
            image_resize(self.img, 300, 300)
        super().save(*args, **kwargs)

    def delete(self):
        if self.img:
            delete_img(self.img)
        super().delete()
"""
class ProfileSerializer(serializers.ModelSerializer):
    user = CustomUsers.objects.all()
    class Meta:
        model = CustomUsers
        fields = "__all__"