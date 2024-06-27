from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .models import ProductImage, ProductWithImage, ProductImageSerializer, ProductWithImageSerializer
from rest_framework.viewsets import ModelViewSet

class ProductImageView(ModelViewSet):
    serializer_class = ProductImageSerializer
    queryset = ProductImage.objects.all()
    parser_classes = [MultiPartParser, FormParser]

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        catser = self.get_serializer(items, many=True)
        return Response(
                {
                    "data": catser.data,
                    }
                )

class ProductWithImageView(ModelViewSet):
    serializer_class = ProductWithImageSerializer
    queryset = ProductWithImage.objects.all().select_related()
    