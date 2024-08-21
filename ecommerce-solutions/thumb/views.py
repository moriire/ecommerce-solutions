from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status 
from .models import ProductImage, ProductWithImage, ProductImageSerializer, ProductWithImageSerializer, XProductWithImageSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from rest_framework.generics import ListAPIView

class ProductPagination(LimitOffsetPagination):
    default_limit = 8
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

    @action(detail=False, methods=["GET"])
    def discounted(self, request):
        items = self.get_queryset()
        items = items.filter(product__discount__gte = 20)[:18]
        catser = self.get_serializer(items, many=True)
        return Response(
                {
                    "data": catser.data,
                    }
                )
    @action(detail=False, methods=["GET"])
    def promoted(self, request):
        items = self.get_queryset()
        items = items.filter(product__package__name ='free')[:18]
        catser = self.get_serializer(items, many=True)
        return Response(
                {
                    "data": catser.data,
                    }
                )
    
    #@action(detail=False, methods=["GET"])
    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        print(pp)
        if (params and pp.get('count')):
            items = items[:int(pp.get('count'))]
        else:
            items = items.filter(**pp)[:12]
        catser = self.get_serializer(items, many=True)
        return Response(
                {
                    "data": catser.data,
                    }
                )
    
class PagedProductWithImageView(ModelViewSet):
    pagination_class = ProductPagination
    serializer_class = XProductWithImageSerializer
    queryset = ProductWithImage.objects.select_related().prefetch_related('images')
    #.exclude(images=None)
    @action(detail=True, methods=['GET'])
    def get_vendor_products(self, request, pk=None):
        items = self.get_queryset().filter(product__profile__user__vendor = True, product__profile__store_slug = pk) 
        ser = self.serializer_class(items, many=True)
        return Response({'data': ser.data})
    
    @action(detail=True, methods=['GET'])
    def get_vendor_productss(self, request, pk=None):
        items = self.get_queryset().filter(product__profile__user__vendor = True, product__profile__store_slug = pk) 
        ser = self.serializer_class(items, many=True)
        return Response({'data': ser.data})
    
    def create(self, request):
        data = request.data
        catser = ProductWithImageSerializer(data = data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data}, status=status.HTTP_201_CREATED)
        return Response(catser.errors, status=status.HTTP_400_BAD_REQUEST)