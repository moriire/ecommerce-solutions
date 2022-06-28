from django.db import models
from category.models import Category
from users.models import Users

class Product(models.Model):
	vendor = models.OneToOneField(Users, related_name="product_vendor")
	category = models.Foreignkey(Category, related_name="product_category")
	name = models.CharField(max_length=100)
	description = models.TextField(max_length=512)
	price = models.FloatField()

	def __str__(self):
		return self.name

	def price_in_kobo(self):
		return price*100


# Create your models here.
