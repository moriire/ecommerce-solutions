from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from .models import Cart
from .serializers import CartSerializer, XCartSerializer
from rest_framework.response import Response
from product.models.product import Products
from users.models import CustomUsers
from thumb.models import ProductWithImage
from order.models import Order

class CartView(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    @action(detail=False, methods=["POST"])
    def bulk_cart(self, request):
        items = request.data
        get_user = lambda user_id: CustomUsers.objects.get(pk=int(user_id))
        orders, created= Order.objects.get_or_create(created_by=get_user(items[0].get('user')))
        print(created, orders)
        product_data = []
        for item in items:
            item["user"] = get_user(item.get('user'))
            item["product"] = ProductWithImage.objects.get(product=item.get("product"))
            cart_obj = Cart(**item)
            product_data.append(cart_obj)
            
        items_obj = Cart.objects.bulk_create(product_data)
        orders.carts.add(*items_obj)
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