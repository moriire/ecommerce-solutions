from django.db import models
from users.models import CustomUsers
from rest_framework import serializers
from utils import delete_img, image_resize
import uuid
from django.utils.translation import gettext_lazy as _
from product.models.product import Products
from product.serializers.product import ProductSerializer, ProductExpandSerializer
from django.contrib.auth import get_user_model
from .tasks import send_notification_email_to_customers_task

User = get_user_model()

def product_image_path(instance, filename):
    return '/'.join([instance.product.category.slug, instance.product.slug, filename])
    
class ProductImage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Products, related_name="product_image", on_delete=models.CASCADE)
    img = models.ImageField(_("Upload Image"), upload_to=product_image_path)
    uploaded_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product.slug
    
    def save(self, *args, **kwargs):
        if self.img.file:
            image_resize(self.img, 500, 600)
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        if self.img:
            self.img.delete(save=True)
        super(ProductImage, self).delete(*args, **kwargs)

class ProductWithImage(models.Model):
    class Status(models.TextChoices):
        approved = "APPROVED"
        rejected = "REJECTED"
        pending = "PENDING"

    product = models.OneToOneField(Products, related_name="product_product", on_delete=models.CASCADE)
    images = models.ManyToManyField(ProductImage, related_name="product_images", blank=True)
    status = models.CharField(max_length=8, choices=Status.choices, default="PENDING")

    def __str__(self):
        return self.product.slug    
    
    def save(self, instance, *a, **b):
        customers = User.objects.filter(vendor = not True).values("email")
        print(customers)
        emails = [email.get("email") for email in customers]
        print(emails)
        item = instance
        print(item.images.all()[0].img)
        send_notification_email_to_customers_task.delay(emails, product_detail={ 
            "product_name" : item.product.name,
            "product_image_url": item.images.all()[0].img.url
        })
        return super().save(*a, **b)
    
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = "__all__"

class ProductWithImageSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True)
    class Meta:
        model = ProductWithImage
        fields = "__all__"

class XProductWithImageSerializer(ProductWithImageSerializer):
    product = ProductExpandSerializer()

class XYProductWithImageSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True)
    product = ProductSerializer()

    class Meta:
        model = ProductWithImage
        fields = "__all__"