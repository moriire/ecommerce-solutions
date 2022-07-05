from django.db import models
from category.models import Category
from users.models import Users
from rest_framework import serializers
from django.template.defaultfilters import slugify # new

class Product(models.Model):
    vendor = models.ForeignKey(Users, on_delete=models.CASCADE, related_name="product_vendor")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="product_category")
    name = models.CharField(max_length=100)
    slug = models.SlugField(null=True, blank=True, unique=True, editable=False)
    description = models.TextField(max_length=512)
    price = models.FloatField()
    discount = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
            return super().save(*args, **kwargs)

    def price_in_kobo(self):
        return self.price*100

    def discount(self):
        return self.discount*self.price

    def discounted_price(self):
        return self.price-self.discount()
    


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

