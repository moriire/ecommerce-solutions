from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import (Products, Category, ProductSerializer, ProductExpandSerializer, CategorySerializer, ReviewSerializer, Reviews)
#from rest_framework import filters

class CategoryView(ModelViewSet):
    """Lists/Get/Re Product category"""
    queryset = Category.objects.all().select_related()
    serializer_class = CategorySerializer

    """
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

    def update(self, request, pk=None):
        item = self.get_queryset().filter(id=pk).first()
        userser = self.get_serializer(instance=item, data=request.data)
        if userser.is_valid():
            userser.save()
            return Response(userser.data)
        return Response(pk)


    def partial_update(self, request, pk):
        item = self.get_queryset().filter(id=pk).first()
        put_data = JSONParser().parse(request)
        useser = self.get_serializer(instance=item, data=put_data, partial=True)
        if useser.is_valid():
            useser.save()
            return Response(useser.data)
        return Response("errors")

    """

class ProductView(ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    #pagination_class = ProductPagination
    #permission_classes = (IsAuthenticated,)
    serializer_class = ProductSerializer
    queryset = Products.objects.all().select_related()

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        catser = ProductExpandSerializer(items, many=True)
        return Response(
                {
                    "data": catser.data,
                    }
                )

class ReviewsView(ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Reviews.objects.all()

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
