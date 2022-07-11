from django.db import models
from users.models import CustomUsers
from rest_framework import serializers
from django.urls import reverse
from django.template.defaultfilters import slugify # new

class Category(models.Model):
    name = models.CharField(max_length=40)
    slug = models.SlugField(null=True, blank=True, unique=True, editable=False)
    description = models.TextField()

    def  __str__(self):
        return self.name

    def absolute_url(self):
        return reverse('category-detail', args=[str(self.id)])

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    class Meta:
        verbose_name =("Category")
        verbose_name_plural = ("Product Categories")

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name", "description", "slug", "absolute_url")


class Products(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="user_product")
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
        model = Products
        fields = "__all__"

