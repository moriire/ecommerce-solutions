from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import WishList
from .serializers import WishListSerializer
from rest_framework.response import Response
from product.models.product import Products

class WishListView(ModelViewSet):
    queryset = WishList.objects.all()
    serializer_class = WishListSerializer

    def partial_update(self, request, *args, **kwargs):
        pd = self.get_queryset().get(pk=kwargs['pk'])
        pd.products.add(request.data['products'][0])#.values_list("products")
        #print(present+request.data['products'])
        return super().partial_update(request, *args, **kwargs)
    
