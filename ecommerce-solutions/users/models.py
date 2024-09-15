from django.db import models
import uuid
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext as _
from django.utils import timezone
from .manager import UserManager
from rest_framework import serializers
from utils import image_resize
from django.core.exceptions import ValidationError as DjangoValidationError

class CustomUsers(PermissionsMixin, AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(_("Username"), max_length=12, unique=True)
    #first_name = models.CharField(_("First Name"), max_length=50)
    #last_name = models.CharField(_("last Name"), max_length=50)
    store_name = models.CharField(_("Store Name"), max_length=50, null=True, blank=True)
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    phone = models.CharField(_("phone number"), unique=True, max_length=8)
    #img = models.ImageField(_("upload image"),  upload_to="users", null=True, blank=True)
    vendor = models.BooleanField(_("Are you a vendor?"), default=False)
    subscribe = models.BooleanField(_("Subscribe?"), default=True)
    objects = UserManager()

    USERNAME_FIELD = "username"

    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return self.username
    
    def save(self, *args, **kwargs):
        self.username = self.email.split("@")[0]
        #self.profile.create(user=self, store_name=self.username)
        return super().save(*args, **kwargs)