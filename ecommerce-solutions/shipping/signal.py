from django.db.models.signals import post_save, pre_delete
from django.contrib.auth.models import User
from django.dispatch import receiver
from users.models import CustomUsers
from .models import Shipping
from order.models import Order
from cart.models import Cart
from thumb.models import ProductWithImage

@receiver(post_save, sender=Shipping) 
def create_order(sender, instance, created, **kwargs):
    item = instance
    print(item.created_by.id)
    orders, created= Order.objects.get_or_create(created_by=item.created_by)
    print(created)
    cart_items = Cart.objects.filter(user__pk=item.created_by.id)
    print( cart_items)
    product_data = []
    for cart_item in cart_items:
        cart_item["user"] = item.created_by
        item["product"] = ProductWithImage.objects.get(product=item.get("product"))
        cart_obj = Cart(**item)
        product_data.append(cart_obj)
            
    items_obj = Cart.objects.bulk_create(product_data)
    orders.carts.add(*items_obj)