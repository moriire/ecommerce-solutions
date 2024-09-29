from rest_framework.serializers import ModelSerializer, ListSerializer

from .models import Cart

from thumb.models import XProductWithImageSerializer

class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = ("id", "count", "product", "user", "cost")
        read_only_fields = ['id',]  
        depth=3
        
class XCartSerializer(ModelSerializer):
    product = XProductWithImageSerializer()
    class Meta:
        model = Cart
        fields = ("id", "count", "product", "user", "cost")
        read_only_fields = ['id',] 
        #depth=3