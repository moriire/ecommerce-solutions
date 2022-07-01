from django.shortcuts import render
from .models import Flash, FlashSerializer
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

class FlashSalesView(GenericViewSet):
	serializer_class = FlashSerializer
	queryset = Flash.objects.all()
	def list(self, request):
		return Response("get all")
