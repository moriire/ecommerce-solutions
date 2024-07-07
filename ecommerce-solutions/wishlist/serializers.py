from rest_framework.serializers import ModelSerializer
from .models import WishList
class WishListSerializer(ModelSerializer):
    class Meta:
        model = WishList
        fields = "__all__"