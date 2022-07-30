from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

from .models import Thumbs, ThumbSerializer

from products.views import CategoryView

class ProductImageView(CategoryView):
    serializer_class = ThumbSerializer
    queryset = Thumbs.objects.all() 
