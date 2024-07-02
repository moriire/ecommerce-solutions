from django.db import models
from users.models import CustomUsers
from product.models import Products
from datetime import datetime 
from rest_framework.serializers import ModelSerializer

class Bargains(models.Model):
	vendor = models.ManyToManyField(CustomUsers, related_name="bargains_vendor+")
	customer = models.ManyToManyField(CustomUsers, related_name="bargains_customer+")
	product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="bargains-product+")
	new_price = models.PositiveIntegerField()
	msg = models.TextField()
	enabled = models.BooleanField(default=False)
	created_on = models.DateTimeField(auto_now=True)

	class Meta:
		verbose_name = ("Bargain")
		verbose_name_plural = ("Bargains")

	def __str__(self):
		return self.product.name

	def absolute_url(self):
		return reverse('Bargain-detail', args=(self.id,))

	def new_price_naira(self):
		return self.package*1000

	def new_price_kobo(self):
		return self.new_price_naira*100

	def period(self):
		return datetime.now() - self.created_on

class BargainSerializer(ModelSerializer):
	class Meta:
		model = Bargains
		fields = "__all__"
