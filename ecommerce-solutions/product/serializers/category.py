from rest_framework import serializers
from product.models.product import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id",
                  "name",# Category name
                  "description", "slug", "absolute_url")
