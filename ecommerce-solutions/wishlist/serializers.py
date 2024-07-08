from rest_framework.serializers import ModelSerializer
from .models import WishList

from product.models.product import Products

class WishListSerializer(ModelSerializer):
    class Meta:
        model = WishList
        fields = "__all__"
        