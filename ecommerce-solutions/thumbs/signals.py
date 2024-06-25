# code
from django.db.models.signals import post_save, pre_delete
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import ProductImage, ProductWithImage
#from products.models import Products

@receiver(post_save, sender=ProductImage) 
def create_prodimage(sender, instance, created, **kwargs):
	if created:
		prodwi_instance = ProductWithImage.object.get(product = instance.product)
		prodwi_instance.add_set(instance)