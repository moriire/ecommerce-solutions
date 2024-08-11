from rest_framework.serializers import ModelSerializer
from order.models import Order

class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"
        read_only_fields = ['id',]  
        
class XOrderSerializer(OrderSerializer):
    class Meta(OrderSerializer.Meta):
        depth=3