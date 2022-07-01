from django.db import models
from rest_framework import serializers
class Category(models.Model):
    name = models.CharField(max_length=40)
    slug = models.SlugField()
    description = models.TextField()
    def  __str__(self):
        return self.name

    class Meta:
        verbose_name =("Category")
        verbose_name_plural = ("Product Categories")

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"







