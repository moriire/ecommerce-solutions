from rest_framework.serializers import ModelSerializer
from .models import Cart

from thumb.models import XProductWithImageSerializer

class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"
        
class XCartSerializer(ModelSerializer):
    product = XProductWithImageSerializer()
    class Meta:
        model = Cart
        fields = "__all__"