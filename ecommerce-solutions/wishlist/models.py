from django.db import models
from profile.models import Profile
from product.models.product import Products

class WishList(models.Model):
    user = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name="wish_user")
    products = models.ManyToManyField(Products, blank=True)

    def __str__(self) -> str:
        return super().__str__()
    
    def wish_count(self):
        return self.products.objects.count()
    
