from django.db import models
from django.urls import reverse
from django.template.defaultfilters import slugify # new
from users.models import CustomUsers
from profile.models import Profile
from packages.models import Packages
from product.models.category import Category

class Products(models.Model):
    CONDITION=(
        ("new", "New"),
        ("used", "Used")
    )
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="user_profile")
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