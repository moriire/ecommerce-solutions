from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import WishList
from .serializers import WishListSerializer, XWishListSerializer
from rest_framework.response import Response
from product.models.product import Products

class WishListView(ModelViewSet):
    queryset = WishList.objects.all()
    serializer_class = WishListSerializer

    def list(self, request, pk=None):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        catser = XWishListSerializer(items, many=True)
        return Response(
                {
                    "data": catser.data
                    }
                )
    
    def partial_update(self, request, *args, **kwargs):
        pd = self.get_queryset().get(pk=kwargs['pk'])
        pd.products.add(request.data['products'][0])#.values_list("products")
        #print(present+request.data['products'])
        return super().partial_update(request, *args, **kwargs)
    
