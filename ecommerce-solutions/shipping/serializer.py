from rest_framework.serializers import ModelSerializer
from .models import Shipping
class ShippingSerializer(ModelSerializer):
    class Meta:
        model = Shipping
        fields = "__all__"