from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from .models import Cart
from .serializers import CartSerializer, XCartSerializer
from rest_framework.response import Response
from product.models.product import Products
from users.models import CustomUsers
from thumb.models import ProductWithImage
from order.models import Order, Ordered
from shipping.models import Shipping

class CartView(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    @action(detail=False, methods=["POST"])
    def bulk_cart(self, request):
        items = request.data
        user =self.request.user
        orders, created= Order.objects.get_or_create(created_by=user)
        cart_data, ordered_data = [], []
        for item in items:
            item["user"] = user
            item["product"] = ProductWithImage.objects.get(product=item.get("product"))
            cart_obj = Cart(**item)
            ordered_obj = Ordered(**item)
            cart_data.append(cart_obj)
            ordered_data.append(ordered_obj)
        shipping, created = Shipping.objects.get_or_create(created_by=user)
        items_obj = Cart.objects.bulk_create(cart_data)
        ordered_obj = Ordered.objects.bulk_create(ordered_data)
        orders.shipping = shipping
        orders.carts.add(*ordered_obj)
        ser = XCartSerializer(items_obj, many=True)
        return Response(ser.data)
        
    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        catser = XCartSerializer(items, many=True)
        return Response(
                {
                    "data": catser.data,
                    }
                )