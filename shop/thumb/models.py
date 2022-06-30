from django.db import models
from category.models import Category
from users.models import Users
from rest_framework import serializers

class Thumb(models.Model):
    product = models.ForeignKey(Users, on_delete=models.CASCADE, related_name="product_thumb")
    img = models.ImageField()
    uploaded_on = models.DateTimeField(auto_now_add=True)
    level = models.IntegerField(default=0)
    caption=models.CharField(max_length=100)
    def __str__(self):
        return self.product.name
 

class ThumbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thumb
        fields = "__all__"

