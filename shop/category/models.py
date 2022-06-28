from django.db import models

class Category(models.Model):
	name = models.CharField(max_length=40)
	description = models.TextField()
	
	def  __str__(self):
		return self.name
# Create your models here.
