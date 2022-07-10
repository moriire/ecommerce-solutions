from django.db import models
from products.models import Products
from rest_framework import serializers

class Thumbs(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="product_thumb")
    img = models.ImageField(upload_to="products")
    uploaded_on = models.DateTimeField(auto_now_add=True)
    level = models.IntegerField(default=0)
    caption=models.CharField(max_length=100)
    def __str__(self):
        return self.product.name
 

class ThumbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thumbs
        fields = "__all__"

