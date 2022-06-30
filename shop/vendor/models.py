from django.db import models
from users.models import Users
from rest_framework import serializers

class Vendor(models.Model):
	user = models.OneToOneField(Users, on_delete=models.DO_NOTHING, related_name="user_profile")
	vendor = models.CharField(max_length=100, unique=True)
	address = models.TextField()
	merchandise = models.TextField()


class VendorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Vendor 
		fields = "__all__"

class VendorUserSerializer(serializers.ModelSerializer):
	user = Users.objects.all()
	class Meta:
		model = Vendor 
		fields = (user, vendor, address, merchandise)



# Create your models here.

# Create your models here.
