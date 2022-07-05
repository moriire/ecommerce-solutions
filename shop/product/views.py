from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

from .models import Product, ProductSerializer

class ProductView(GenericViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    def list(self, request):
        items = Product.objects.all()
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

