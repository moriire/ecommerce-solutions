from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

from .models import Vendor, VendorSerializer

class VendorView(GenericViewSet):
    serializer_class = VendorSerializer
    queryset = Vendor.objects.all()
    def list(self, request):
        items = Vendor.objects.all()
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

        catser = VendorSerializer(items, many=True)
        return Response({"data": catser.data, "count": len(catser.data), "p": request.query_params})
    def create(self, request):
        catser = VendorSerializer(data=request.data)
        return Response({"data": catser.data})

