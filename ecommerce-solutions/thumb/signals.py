# code
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from .models import ProductImage, ProductWithImage

@receiver(post_save, sender=ProductImage) 
def create_prodimage(sender, instance, created, **kwargs):
	if created:
		prodwi_instance = ProductWithImage.objects.get(product__id = instance.product.id)
		prodwi_instance.images.add(instance)