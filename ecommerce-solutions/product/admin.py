from django.contrib import admin
from .models.product import Products, Category
admin.site.register(Products)
admin.site.register(Category)
# Register your models here.
