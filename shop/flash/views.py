from django.shortcuts import render
from .models import Flash, FlashSerializer
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

class FlashSalesView(GenericViewSet):
	queryset = Flash
	serializer_class = FlashSerializer
	def list():
		return Response("get all")
