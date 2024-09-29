from django.db import models
from django.db import models
from product.models.product import Products
from users.models import CustomUsers
from thumb.models import ProductWithImage

class Cart(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="cart_user")
    product = models.ForeignKey(ProductWithImage, on_delete=models.CASCADE, blank=True, null=True, related_name="added_product")
    count = models.IntegerField(default=1)
    
    def __str__(self) -> str:
        return self.product.product.slug
    
    def cost(self):
        return self.count * self.product.product.new_price()
    