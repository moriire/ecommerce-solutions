from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status 
from .models import ProductImage, ProductWithImage, ProductImageSerializer, ProductWithImageSerializer, XProductWithImageSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from rest_framework.generics import ListAPIView

class ProductPagination(LimitOffsetPagination):
    default_limit = 4
    limit_query_param = 'limit'
    offset_query_param = 'offset'
    max_limit = None

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
    queryset = ProductWithImage.objects.all().order_by("-pk").select_related().prefetch_related("images")
    serializer_class = XProductWithImageSerializer

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        print(pp)
        if (params and pp.get('count')):
            items = items[:int(pp.get('count'))]

        elif (params and pp.get('discount')):
            items = items.filter(product__discount__gte = int(pp.get('discount')))[:18]

        elif (params and pp.get('promoted')):
            items = items.filter(product__package__name = pp.get('promoted'))[:18]
        
        
        else:
            items = items.filter(**pp)[:12]
        catser = self.get_serializer(items, many=True)
        return Response(
                {
                    "data": catser.data,
                    }
                )

"""
class ProductWithImageView(ModelViewSet):
    serializer_class = XProductWithImageSerializer
    queryset = ProductWithImage.objects.select_related().prefetch_related('images')
    http_method_names = ("GET",)
    
    def list(self, request, *args, **kwargs):
        #self.get_queryset = self.get_queryset.exclude(images=None)
        return super().list(request, *args, **kwargs)
"""

class PagedProductWithImageView(ModelViewSet):
    pagination_class = ProductPagination
    serializer_class = XProductWithImageSerializer
    queryset = ProductWithImage.objects.select_related().prefetch_related('images')
    #.exclude(images=None)
   
    def create(self, request):
        data = request.data
        catser = ProductWithImageSerializer(data = data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data}, status=status.HTTP_201_CREATED)
        return Response(catser.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def list(self, request, *args, **kwargs):
        #self.get_queryset = self.get_queryset.exclude(images=None)
        return super().list(request, *args, **kwargs)
