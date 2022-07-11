from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext as _
from django.utils import timezone
from .manager import UserManager
from utils import image_resize

class CustomUsers(AbstractBaseUser, PermissionsMixin):
    full_name = models.CharField(_("Full Name"), max_length=100)
    username = models.CharField(_("username"), max_length=100, unique=True,)
    email = models.EmailField(_("email address"), unique=True,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    phone = models.IntegerField(_("phone number"), unique=True)
    img = models.ImageField(_("upload image"),  upload_to="users", null=True, blank=True
)
    vendor = models.BooleanField(_("Are you a vendor?"), default=False)
    company_name = models.CharField(max_length=100, unique=True, blank=True, null=True)
    #slug = models.SlugField(null=True, blank=True, unique=True, editable=False)
    address = models.TextField(blank=True, null=True)
    merchandise = models.TextField(blank=True, null=True)
    subscribe = models.BooleanField(_("Subscribe?"), default=True)
    objects = UserManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = "email"

    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return self.username

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

    def get_short_name(self):
        return self.full_name.split(" ")[0]

    def email_user(self, subject, message, from_email=None, **kwargs):
        """Send an email to this user."""
        send_mail(subject, message, from_email, [self.email], **kwargs)
