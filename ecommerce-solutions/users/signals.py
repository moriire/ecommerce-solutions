# code
from django.db.models.signals import post_save, pre_delete
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import CustomUsers
from profiles.models import Profile

@receiver(post_save, sender=CustomUsers) 
def create_profile(sender, instance, created, **kwargs):
	if created:
		if instance.vendor:
			Profile.objects.create(user=instance, store_name=instance.username)
		else:
			Profile.objects.create(user=instance)