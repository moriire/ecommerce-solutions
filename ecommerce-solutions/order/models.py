from django.db import models
from django.db import models
from product.models.product import Products
from cart.models import Cart
from users.models import CustomUsers
from shipping.models import Shipping
from thumb.models import ProductWithImage


class PreOrder(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="cart_user")
    product = models.ForeignKey(ProductWithImage, on_delete=models.CASCADE, blank=True, null=True, related_name="added_product")
    count = models.IntegerField(default=1)
    
    def __str__(self) -> str:
        return self.product.product.slug
    
    def cost(self):
        return self.count * self.product.product.new_price()

class Order(models.Model):
    class OrderStatus(models.TextChoices):
        UNPAID = "unpaid"
        PAID = "paid"
        DELIVERED = "delivered"
        COMPLETED = "completed"

    created_by = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="order_by")
    carts = models.ManyToManyField(PreOrder, blank=True)
    shipping = models.ForeignKey(Shipping, related_name="order_shipping", on_delete=models.CASCADE, null=True, blank=True)
    authorization_code = models.CharField(max_length=16, blank=True, null=True)
    reference_code = models.CharField(max_length=12, blank=True, null=True)
    status = models.CharField(max_length=9, choices=OrderStatus.choices, default="UNPAID")
    created_on = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return self.created_by.get_full_name
    

