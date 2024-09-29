from rest_framework.serializers import ModelSerializer
from order.models import Order


from rest_framework.serializers import ModelSerializer, ListSerializer

from .models import Cart

from thumb.models import XProductWithImageSerializer

class OrderedSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"
        read_only_fields = ['id',]  


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"
        read_only_fields = ['id',]  
        
class XOrderSerializer(OrderSerializer):
    class Meta(OrderSerializer.Meta):
        depth=3