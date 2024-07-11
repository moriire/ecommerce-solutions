from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Cart
from .serializers import CartSerializer, XCartSerializer
from rest_framework.response import Response
from product.models.product import Products

class CartView(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

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