from django.apps import apps
from django.contrib.auth.base_user import BaseUserManager

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from django.contrib.auth.hashers import make_password

from django.core.exceptions import PermissionDenied
from django.core.mail import send_mail
from django.db import models

from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.validators import UnicodeUsernameValidator

from PIL import Image
from utils import image_resize, delete_img

class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self,
            username,
            email, password, **extra_fields):
        user = self.model(
                username=username,
                email=email,
                **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self,
            username,
            email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(
                username,
                email,
                password,
                **extra_fields)

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, username, password, **extra_fields)

    def with_perm(
        self, perm, is_active=True, include_superusers=True, backend=None, obj=None
    ):
        if backend is None:
            backends = auth._get_backends(return_tuples=True)
            if len(backends) == 1:
                backend, _ = backends[0]
            else:
                raise ValueError(
                    "You have multiple authentication backends configured and "
                    "therefore must provide the `backend` argument."
                )
        elif not isinstance(backend, str):
            raise TypeError(
                "backend must be a dotted import path string (got %r)." % backend
            )
        else:
            backend = auth.load_backend(backend)
        if hasattr(backend, "with_perm"):
            return backend.with_perm(
                perm,
                is_active=is_active,
                include_superusers=include_superusers,
                obj=obj,
            )
        return self.none()


# A few helper functions for common logic between User and AnonymousUser.
def _user_get_permissions(user, obj, from_name):
    permissions = set()
    name = "get_%s_permissions" % from_name
    for backend in auth.get_backends():
        if hasattr(backend, name):
            permissions.update(getattr(backend, name)(user, obj))
    return permissions


def _user_has_perm(user, perm, obj):
    """
    A backend can raise `PermissionDenied` to short-circuit permission checking.
    """
    for backend in auth.get_backends():
        if not hasattr(backend, "has_perm"):
            continue
        try:
            if backend.has_perm(user, perm, obj):
                return True
        except PermissionDenied:
            return False
    return False


def _user_has_module_perms(user, app_label):
    """
    A backend can raise `PermissionDenied` to short-circuit permission checking.
    """
    for backend in auth.get_backends():
        if not hasattr(backend, "has_module_perms"):
            continue
        try:
            if backend.has_module_perms(user, app_label):
                return True
        except PermissionDenied:
            return False
    return False


class Users(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(_("username"), max_length=100, unique=True,)
    full_name = models.CharField(_("Full Name"), max_length=100)
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    phone = models.IntegerField(_("phone number"),  blank=True, null=True,)
    img = models.ImageField(_("upload image"),  upload_to="users", null=True, blank=True)
    vendor = models.BooleanField(_("Are you a vendor?"), default=False)
    subscribe = models.BooleanField(_("Subscribe?"), default=True)
    objects = UserManager()

    USERNAME_FIELD = 'username'

    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username#email.split("@")[0]

    def save(self, *args, **kwargs):
        if self.img:
            image_resize(self.img, 300, 300)
        super().save(*args, **kwargs)

    def delete(self):
        if self.img:
            delete_img(self.img)
        super().delete()

    def get_short_name(self):
        return self.full_name.split(" ")[0]

    def email_user(self, subject, message, from_email=None, **kwargs):
        """Send an email to this user."""
        send_mail(subject, message, from_email, [self.email], **kwargs)

