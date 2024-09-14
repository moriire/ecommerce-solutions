# code
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from profile.models import Profile
User = get_user_model()

@receiver(post_save, sender=User) 
def create_profile(sender, instance, created, **kwargs):
	if created:
		print(instance)
		Profile.objects.create(user = instance, store_name=instance.username)
		#instance.user_profile.save()
		