from django.db import models
from django.db import models
from product.models.product import Products
from cart.models import Cart
from users.models import CustomUsers
from shipping.models import Shipping

class Order(models.Model):
    class OrderStatus(models.TextChoices):
        UNPAID = "unpaid"
        PAID = "paid"
        DELIVERED = "delivered"
        COMPLETED = "completed"

    created_by = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="order_by")
    carts = models.ManyToManyField(Cart, blank=True)
    shipping = models.ForeignKey(Shipping, related_name="order_shipping", on_delete=models.CASCADE, null=True, blank=True)
    status = models.CharField(max_length=9, choices=OrderStatus.choices, default="UNPAID")
    created_on = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return self.created_by.get_full_name