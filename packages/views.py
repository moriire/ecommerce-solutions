from django.shortcuts import render
from .models import Packages, PackageSerializer
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
import py4paystack as p4p

class PackagesView(GenericViewSet):
    serializer_class = PackageSerializer
    queryset = Packages.objects.all()
    #permission_classes = [IsAuthenticated]
    """
    def get_permissions(self):
        if self.action=="list":
            print("get action")
            permission_classes = [IsAuthenticatedOrReadOnly]
            #t = p4p.Transaction()
            #t.Subscription()

    """
            
    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp= params.dict()
        if params:
            items = items.filter(**pp)
        catser = self.get_serializer(items, many=True)
        return Response({"data": catser.data})

    def retrieve(self, request, pk):
        item = self.get_queryset().filter(id=pk).first()
        catser = self.get_serializer(item)
        return Response(catser.data)

    def create(self, request):
        t = p4p.Paystack()
        catser = self.get_serializer(data=request.data)
        if catser.is_valid():
            t.Plan()(name=request.data.name, amount=request.data.price, interval=request.data.duration)
            catser.save()
            return Response({"data": catser.data})
        return Response("errors")

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

