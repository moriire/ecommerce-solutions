from django.db import models
from category.models import Category
from users.models import Users
from rest_framework import serializers

class Product(models.Model):
	vendor = models.OneToOneField(Users, on_delete=models.DO_NOTHING, related_name="product_vendor")
	category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="product_category")
	name = models.CharField(max_length=100)
	description = models.TextField(max_length=512)
	price = models.FloatField()

	def __str__(self):
		return self.name

	def price_in_kobo(self):
		return price*100


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

