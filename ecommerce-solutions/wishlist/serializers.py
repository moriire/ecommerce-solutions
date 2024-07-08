from rest_framework.serializers import ModelSerializer
from .models import WishList

from product.models.product import Products

class WishListSerializer(ModelSerializer):
    class Meta:
        model = WishList
        fields = "__all__"

    def update(self, instance, validated_data):
        liked = Products.objects.get(pk=validated_data.get('products'))
        latest = self.get_queryset.get(pk=instance.user)
        if validated_data.get('products'):
            validated_data['products'] = latest.products.objects.add(liked)
        return super().update(instance, validated_data)