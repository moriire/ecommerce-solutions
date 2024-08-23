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
        user = self.request.user
        print(created_by)
        item = self.get_queryset()
        obj, created = item.get_or_create(created_by=user)
        serd = self.get_serializer(obj)
        print(obj)
        if created:
            ser = self.get_serializer(data = obj)
            if ser.is_valid():
                ser.save()
                return Response({"data": ser.data})
        return Response({"data": serd.data})