from django.db import models
from flash.models import Flash
from users.models import Users
class Pay(models.Model):
	auto = models.BooleanField(default=False)
	reference = models.CharField(max_length=100)
	flash = models.ForeignKey(Flash, on_delete=models.CASCADE, related_name="flash_pay+")
	auth_code = models.CharField(max_length=128)
	verified = models.BooleanField(default=False)
	paid_by = models.ForeignKey(Users, on_delete=models.CASCADE, related_name="paid_by+")
	paid_on = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return self.paid_by.first_name

	class Meta:
		verbose_name =("Payment")
		verbose_name_plural =("Payments")