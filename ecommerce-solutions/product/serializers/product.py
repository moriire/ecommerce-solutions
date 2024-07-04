from rest_framework import serializers
from product.models.product import Products
from profile.models import ProfileSerializer, ProfileExpandSerializer
from packages.models import PackageSerializer
from .category import CategorySerializer

class ProductExpandSerializer(serializers.ModelSerializer):
    package = PackageSerializer()
    category = CategorySerializer()
    profile = ProfileExpandSerializer()
    class Meta:
        model = Products
        fields = (
            "id", #user id
            "package", # subscribed package e.g Jumbo superstor, dandy
            "category",# Product category
             "profile", #user
            "name",# Product name
            "new_price",
            "discounted_price",
            "slug",
            "quantity",
            "description", #detailed product description less than 200
            "price", #product price
            "discount",
            "brand",
            "condition",
            "price",
            )

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = (
            "id", #user id
            "package", # subscribed package e.g Jumbo superstor, dandy
            "category",# Product category
             "profile", #user
            "name",# Product name
            "slug",
            "quantity",
            "description", #detailed product description less than 200
            "price", #product price
            "discount",
            "brand",
            "condition",
            "new_price",
            "price",
            "discounted_price"#discount on product price
            )
