from django.db import models
from product.models.product import Products
from users.models import CustomUsers

class WishList(models.Model):
    user = models.OneToOneField(CustomUsers, on_delete=models.CASCADE, related_name="wish_user", primary_key=True, unique=True)
    products = models.ManyToManyField(Products, blank=True, related_name="liked_product")

    def __str__(self) -> str:
        return super().__str__()
    
    def wish_count(self):
        return self.products.objects.count()
    
