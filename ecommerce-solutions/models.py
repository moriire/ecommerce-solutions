from django.db import models
from users.models import CustomUsers
from products.models import Products
from datetime import datetime 
from rest_framework.serializers import ModelSerializer

class Messages(models.Model):
	vendor = models.ManyToMany(CustomUsers, on_delete=models.CASCADE, related_name="vendor")
	customer = models.ManyToMany(CustomUsers, on_delete=models.CASCADE, related_name="customer")
	product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="message-vendor")
	new_price = models.PositiveIntegerField()
	msg = models.TextField()
	enabled = models.BooleanField(default=False)
	created_on = models.DateTimeField(auto_now=True)

	class Meta:
		verbose_name = ("Message")
		verbose_name_plural = ("Messages")

	def __str__(self):
		return self.product.name

	def absolute_url(self):
		return reverse('message-detail', args=(self.id,))

	def new_price_naira(self):
		return self.package*1000

	def new_price_kobo(self):
		return self.new_price_naira*100

	def period(self):
		return datetime.now() - self.created_on

class MessageSerializer(ModelSerializer):
	class Meta:
		model = Messages
		fields = "__all__"
