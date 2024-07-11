from django.db import models
from product.models.product import Products
from users.models import CustomUsers
from thumb.models import ProductWithImage

class WishList(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="wish_user")
    product = models.ForeignKey(ProductWithImage, on_delete=models.CASCADE, blank=True, related_name="liked_product")

    def __str__(self) -> str:
        return super().__str__()