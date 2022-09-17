from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

from .models import Thumbs, ThumbSerializer
from rest_framework.viewsets import ModelViewSet

class ProductImageView(ModelViewSet):
    """Vendor image serializer"""
    serializer_class = ThumbSerializer
    queryset = Thumbs.objects.all().select_related()
