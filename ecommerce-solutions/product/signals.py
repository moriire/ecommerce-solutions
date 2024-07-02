# code
from django.db.models.signals import post_save, pre_delete
from django.contrib.auth.models import User
from django.dispatch import receiver
from thumbs.models import ProductImage, ProductWithImage
from products.models import Products

@receiver(post_save, sender=Products) 
def create_product(sender, instance, created, **kwargs):
	if created:
		ProductWithImage.objects.create(product = instance)