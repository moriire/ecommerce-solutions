from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializer import ShippingSerializer
from .models import Shipping

class ShippingViews(ModelViewSet):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer

# Create your views here.
