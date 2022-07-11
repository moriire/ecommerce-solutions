from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

from .models import Products, Category, ProductSerializer, CategorySerializer
from rest_framework import filters

class CategoryView(GenericViewSet):
    """
    All Categories(GET): /api/categories/
    Categories(POST, PUT, PATCH): /api/categories/:id
    
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer   
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'slug', 'category__name']

    def list(self, request):
        items = Category.objects.all()
        params = request.query_params
        pk = params.get("id", None)
        name = params.get("name", None)
        slug = params.get("slug", None)
        if pk:
            items = items.filter(id=pk)
        if name:
            items = items.filter(name = name)
        if slug:
            items = items.filter(slug= slug)

        catser = CategorySerializer(items, many=True)
        return Response(
                {
                    "data": catser.data, 
                    "count": len(catser.data), 
                    "p": request.query_params
                    }
                )
    def retrieve(self, request, pk):
        return "pk"

    def create(self, request):
        catser = CategorySerializer(data=request.data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data})
        return Response("something went wrong")

    def update(self, request, pk=None):
        return Response(pk)

    def partial_update(self, request, pk):
        return Response(pk=None)

    def retrieve(self, request, pk=None):
        return Response(pk)


class ProductView(GenericViewSet):
    serializer_class = ProductSerializer
    queryset = Products.objects.all()
    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pk = params.get("id", None)
        name = params.get("name", None)
        slug = params.get("slug", None)
        price = params.get("price", None)
        if pk:
            items = items.filter(id=pk)
        if name:
            items = items.filter(name = name)
        if slug:
            items = items.filter(slug= slug)
        if price:
            items = items.filter(price <= price)
        catser = ProductSerializer(items, many=True)
        return Response({"data": catser.data, "count": len(catser.data), "p": request.query_params})
    def create(self, request):
        catser = ProductSerializer(data=request.data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data})
        return Response({"data": "error"})

