from rest_framework.serializers import ModelSerializer
from .models import WishList

from thumb.models import XProductWithImageSerializer

class WishListSerializer(ModelSerializer):
    class Meta:
        model = WishList
        fields = "__all__"
        
class XWishListSerializer(ModelSerializer):
    product = XProductWithImageSerializer()
    class Meta:
        model = WishList
        fields = "__all__"
        