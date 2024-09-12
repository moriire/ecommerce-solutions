from django.db import models
import uuid
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext as _
from django.utils import timezone
from .manager import UserManager
from rest_framework import serializers
from utils import image_resize
from django.core.exceptions import ValidationError as DjangoValidationError

class CustomUsers(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(_("Username"), max_length=12, unique=True)
    first_name = models.CharField(_("First Name"), max_length=50)
    last_name = models.CharField(_("last Name"), max_length=50)
    store_name = models.CharField(_("Store Name"), max_length=50, null=True, blank=True)
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    phone = models.CharField(_("phone number"), unique=True, max_length=8)
    img = models.ImageField(_("upload image"),  upload_to="users", null=True, blank=True)
    vendor = models.BooleanField(_("Are you a vendor?"), default=False)
    subscribe = models.BooleanField(_("Subscribe?"), default=True)
    objects = UserManager()

    USERNAME_FIELD = "username"

    REQUIRED_FIELDS = ["email", "first_name", "last_name", "phone"]

    def __str__(self):
        return self.username
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def save(self, *args, **kwargs):
        #self.profile.create(user=self, store_name=self.username)
        return super().save(*args, **kwargs)
"""   
class CustomRegisterSerializer(RegisterSerializer):
    #first_name = serializers.CharField(required=True, write_only=True)
    #last_name = serializers.CharField(required=True, write_only=True)
    vendor = serializers.BooleanField(write_only=True)
    store_name = serializers.CharField(write_only=True)
    phone = serializers.CharField(required=True, write_only=True)
    #img=serializers.ImageField(allow_empty_file=True)
    
    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'phone': self.validated_data.get('phone', ''),
            'vendor': self.validated_data.get('vendor'),
            'store_name': self.validated_data.get('store_name', ""),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user = adapter.save_user(request, user, self, commit=False)
        if "password1" in self.cleaned_data:
            try:
                adapter.clean_password(self.cleaned_data['password1'], user=user)
            except DjangoValidationError as exc:
                raise serializers.ValidationError(
                    detail=serializers.as_serializer_error(exc)
                )
        user.phone = self.cleaned_data.get("phone")
        user.vendor = self.cleaned_data.get("vendor")
        user.save()
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user

""" 