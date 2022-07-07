from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

from .models import Thumb, ThumbSerializer

class ProductImageView(GenericViewSet):
    serializer_class = ThumbSerializer
    queryset = Thumb.objects.all()
    
    def list(self, request):
        items = Thumb.objects.all()
        params = request.query_params
        catser = ThumbSerializer(items, many=True)
        return Response({"data": catser.data, "count": len(catser.data), "p": request.query_params})

    def create(self, request):
        catser = ThumbSerializer(data=request.data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data})
        return Response("errors")

