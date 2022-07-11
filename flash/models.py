from django.db import models
from users.models import CustomUsers
from products.models import Products
from datetime import datetime 
from rest_framework.serializers import ModelSerializer

FLASH_PACKAGES =(
				(1, "Normal"),
				(2, "Super"),
				(3, "Mega"),
				(4, "Jumbo")
				)

class Flash(models.Model):
	user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="flash-user+")
	product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="flash-product+")
	package = models.PositiveSmallIntegerField(choices=FLASH_PACKAGES)
	enabled = models.BooleanField(default=False)
	created_on = models.DateTimeField(auto_now=True)

	class Meta:
		verbose_name = ("flash Sale")
		verbose_name_plural = ("Flash Sales")

	def __str__(self):
		return "{}-{}".format(self.package, self.vendor.Users.first_name)

	def absolute_url(self):
		return reverse('flash-detail', args=(self.id,))

	def price_naira(self):
		return self.package*1000

	def price_kobo(self):
		return self.price_naira*100

	def flash_time(self):
		return self.package*60

	def period(self):
		return datetime.now() - self.created_on

	def monitor_flash(self):
		if self.period()>self.flash_time():
			#self.objects.get(id=self.id).delete()
			return True
		else:
			pass

class FlashSerializer(ModelSerializer):
	class Meta:
		model = Flash
		fields = "__all__"
