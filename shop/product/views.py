from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Product, ProductSerializer

class ProductListView(APIView):
    def get(self, request):
        items = Product.objects.all()
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

        catser = ProductSerializer(items, many=True)
        return Response({"data": catser.data, "count": len(catser.data), "p": request.query_params})
    def post(self, request):
        catser = ProductSerializer(data=request.data)
        return Response({"data": catser.data})

