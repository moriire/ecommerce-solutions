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

        catser = self.get_serializer(items, many=True)
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
        catser = self.get_serializer(data=request.data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data})
        return Response("something went wrong")

    def retrieve(self, request, pk):
        item = self.get_queryset().filter(id=pk).first()
        catser = self.get_serializer(item)
        return Response(catser.data)

    def destroy(self, request, pk=None):
        if pk is None:
            self.get_queryset().delete()
            return Response("all deleted")
        else:
            self.get_queryset().filter(id=pk).delete()
            return Response("single seleted")

    def update(self, request, pk):
        userser = self.get_serializer(data=request.data)
        if userser.is_valid():
            userser.save()
            return Response(userser.data)
        return Response(pk)


    def partial_update(self, request, pk=None):
        useser = self.get_serializer(self.get_queryset(), data=request.data, partial=True)
        if useser.is_valid():
            useser.save()
            return Response(useser.data)
        return Response("errors")




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
    
    def retrieve(self, request, pk):
        item = self.get_queryset().filter(id=pk).first()
        catser = ProductSerializer(item)
        return Response(catser.data)

    def create(self, request):
        catser = ProductSerializer(data=request.data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data})
        return Response({"data": "error"})

