from django.db import models
from vendor.models import Vendor
from users.models import Users
from product.models import Product
from datetime import datetime 
from rest_framework.serializers import ModelSerializer

FLASH_PACKAGES =(
				("Normal", 1),
				("Super", 2),
				("Mega", 3),
				("Jumbo", 4)
				)

class Flash(models.Model):
	vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name="flash-vendor")
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="flash-product")
	package = models.IntegerField(choices=FLASH_PACKAGES)
	enabled = models.BooleanField()
	clicks = models.IntegerField(default=0)
	created_on = models.DateTimeField(auto_now=True)

	def __str__(self):
		return "{}-{}".format(self.package, self.vendor.Users.first_name)

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