from django.db import models
from users.models import CustomUsers
from django.urls import reverse
from django.template.defaultfilters import slugify # new
from .product import Products, Category

class Reviews(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="user+")
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="product_review")
    comment = models.TextField()
    reviewed_on = models.DateTimeField(auto_now_add=True)

    def  __str__(self):
        return self.user.full_name

    def absolute_url(self):
        return reverse('review-detail', args=(self.id))