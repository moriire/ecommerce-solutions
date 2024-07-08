from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import WishList
from .serializers import WishListSerializer

class WishListView(ModelViewSet):
    queryset = WishList.objects.all()
    serializer_class = WishListSerializer
    
