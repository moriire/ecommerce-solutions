from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.parsers import JSONParser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import (Products, Category, ProductSerializer, ProductExpandSerializer, CategorySerializer, ReviewSerializer, Reviews)
#from rest_framework import filters
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from users.models import CustomUsers
from profiles.models import Profile
from packages.models import Packages

class ProductPagination(LimitOffsetPagination):
    default_limit = 2
    limit_query_param = 'limit'
    offset_query_param = 'offset'
    max_limit = None


class CategoryView(ModelViewSet):
    queryset = Category.objects.all()#.select_related()
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
    pagination_class = ProductPagination
    #permission_classes = (IsAuthenticated,)
    serializer_class = ProductExpandSerializer
    queryset = Products.objects.all()#.select_related()

    def create(self, request):
        data = request.data
        #print(type(data['profile']))
        #data["category"] = Category.objects.get(pk=data['category'])
        #data["package"] = Packages.objects.get(pk=data['package'])
        #data["profile"] = Profile.objects.get(user__pk=data['profile']).id
        #print(data)
        catser = ProductSerializer(data = data)
        if catser.is_valid():
            catser.save()
            return Response({"data": catser.data}, status=status.HTTP_201_CREATED)
        return Response(catser.errors, status=status.HTTP_400_BAD_REQUEST)
    """
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
    """
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
