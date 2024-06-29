from django.db import models
from users.models import CustomUsers
from profiles.models import Profile, ProfileSerializer, ProfileExpandSerializer
from packages.models import Packages, PackageSerializer
from rest_framework import serializers
from django.urls import reverse
from django.template.defaultfilters import slugify # new

class Category(models.Model):
    name = models.CharField(max_length=40)
    slug = models.SlugField(unique=True, editable=False, db_index=True)
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
        fields = ("id",
                  "name",# Category name
                  "description", "slug", "absolute_url")

class Products(models.Model):
    CONDITION=(
        ("new", "New"),
        ("used", "Used")
    )
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="user_product")
    package = models.ForeignKey(Packages, on_delete=models.CASCADE, related_name="user_packages")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="product_category")
    name = models.CharField(max_length=100)
    slug = models.SlugField(null=True, blank=True, unique=True, editable=False)
    brand = models.CharField(max_length=50, null=True, blank=True,)
    condition = models.CharField(max_length=11, null=True, blank=True, choices=CONDITION)
    description = models.TextField(max_length=512)
    price = models.FloatField()
    quantity = models.IntegerField(null=True, blank=True)
    viewed_by = models.ManyToManyField(CustomUsers, related_name="viewed_by", blank=True)
    discount = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    def price_in_kobo(self):
        return self.price*100

    def discounted_price(self):
        return int(self.price)*int(self.discount)/100

    def new_price(self):
        return int(self.price) - self.discounted_price()

    def no_of_viewers(self):
        return self.viewed_by.count()

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
        #depth = 1


class Reviews(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="user+")
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="product_review")
    comment = models.TextField()
    reviewed_on = models.DateTimeField(auto_now_add=True)

    def  __str__(self):
        return self.user.full_name

    def absolute_url(self):
        return reverse('review-detail', args=(self.id))

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = "__all__"
