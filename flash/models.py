from django.db import models
from packages.models import Packages
from users.models import CustomUsers
from datetime import datetime
from rest_framework.serializers import ModelSerializer
from py4paystack import Subscription as sub

class Flash(models.Model):
	user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="flash-user+")
	package = models.ForeignKey(Packages, on_delete=models.CASCADE, related_name="flash-package+")
	enabled = models.BooleanField(default=False)
	sub_data = models.JSONField(editable = False)
	created_on = models.DateTimeField(auto_now=True)

	class Meta:
		verbose_name = ("flash Sale")
		verbose_name_plural = ("Flash Sales")

	def __str__(self):
		return "{}-{}".format(self.package, self.vendor.Users.first_name)


	def save(self, *args, **kwargs):
	    email = self.user.email
	    plan_code = self.package.plan_code
	    try:
	        s = sub(email=email, plan_code=plan_code).create()
	        self.sub_data = s
	        super(Flash, self).save(*args, **kwargs)
	    except Exception as e:
	        raise Exception(e)

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
