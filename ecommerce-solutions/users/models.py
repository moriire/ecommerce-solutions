from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext as _
from django.utils import timezone
from .manager import UserManager
from rest_framework import serializers
#from utils import image_resize

class CustomUsers(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(_("Username"), max_length=12, unique=True)
    first_name = models.CharField(_("First Name"), max_length=50)
    last_name = models.CharField(_("last Name"), max_length=50)
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

    REQUIRED_FIELDS = ["email", "first_name", "last_name"]

    def __str__(self):
        return self.username
    def absolute_url(self):
        return reverse('flash-detail', args=(self.id,))

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

from allauth.account.models import EmailAddress

def email_address_exists(email):
    return EmailAddress.objects.filter(email=email).exists()

from allauth.account import app_settings as allauth_settings
#from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework.exceptions import ValidationError

from django.utils.translation import gettext_lazy as _

class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField(required=True, write_only=True)
    last_name = serializers.CharField(required=True, write_only=True)
    phone = serializers.CharField(required=True, write_only=True)
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    #img=serializers.ImageField(allow_empty_file=True)

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _('A user is already registered with this e-mail address.'),
                )
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(_("The two password fields didn't match."))
        return data

    def custom_signup(self, request, user):
        pass

    def get_cleaned_data(self):
        return {
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'phone': self.validated_data.get('phone', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
#img": self.validated_data.get("img", "")
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
        user.save()
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user
