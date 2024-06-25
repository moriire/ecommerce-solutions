from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .models import ProductImage, ProductWithImage, ProductImageSerializer, ProductWithImageSerializer
from rest_framework.viewsets import ModelViewSet

class ProductImageView(ModelViewSet):
    serializer_class = ProductImageSerializer
    queryset = ProductImage.objects.all()
    parser_classes = [MultiPartParser, FormParser]

class ProductWithImageView(ModelViewSet):
    """Vendor image serializer"""
    serializer_class = ProductWithImageSerializer
    queryset = ProductWithImage.objects.all().select_related()