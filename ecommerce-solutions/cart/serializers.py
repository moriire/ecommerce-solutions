from rest_framework.serializers import ModelSerializer, ListSerializer

from .models import Cart

from thumb.models import XProductWithImageSerializer

class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"
        read_only_fields = ['id',]  
        
class XCartSerializer(ModelSerializer):
    product = XProductWithImageSerializer()
    class Meta:
        model = Cart
        fields = "__all__"
        depth=3