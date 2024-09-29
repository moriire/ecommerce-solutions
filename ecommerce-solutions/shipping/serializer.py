from rest_framework.serializers import ModelSerializer
from .models import Shipping, LocationPriceModel

class LocationPriceSerializer(ModelSerializer):
    class Meta:
        model = LocationPriceModel
        fields = "__all__"

class ShippingSerializer(ModelSerializer):
    #city = LocationPriceSerializer()
    class Meta:
        model = Shipping
        fields = "__all__"
        