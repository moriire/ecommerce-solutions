from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializer import ShippingSerializer, LocationPriceSerializer
from .models import Shipping, LocationPriceModel
from rest_framework.decorators import action
from rest_framework.response import Response


class LocationPricingViews(ModelViewSet):
    queryset = LocationPriceModel.objects.all()
    serializer_class = LocationPriceSerializer
    http_methods = ["GET"]

class ShippingViews(ModelViewSet):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer

    @action(detail=False, methods=["POST"])
    def shipping_address(self, request):
        created_by = request.data.get("created_by")
        item = self.get_queryset()
        obj, created = item.get_or_create(created_by=created_by)
        #print(obj, created)
        ser = self.get_serializer(obj)
        return Response({"data": ser.data})