from django.db import models
from rest_framework import serializers
from django.template.defaultfilters import slugify # new

class Category(models.Model):
    name = models.CharField(max_length=40)
    slug = models.SlugField(null=True, blank=True, unique=True, editable=False)
    description = models.TextField()
    def  __str__(self):
        return self.name

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
        fields = "__all__"







