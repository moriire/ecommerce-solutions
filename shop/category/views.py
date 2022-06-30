from django.shortcuts import render
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response

from .models import Category, CategorySerializer

class CategoryView(GenericViewSet):
    """
    This endpoint is absolutely used by the frontend and admin for classifying available items based on the following:\n 1. Products\n 2. Vendors\n Fields:\n 1. Name: The name of the type of items e.g. Electronics, Wears etc.\n 2. Slug(backend): frontend for routing category-detail.\n 3. Description: blah blah blah about the cat.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
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
        return Response({"data": catser.data, "count": len(catser.data), "p": request.query_params})

    def create(self, request):
        catser = CategorySerializer(data=request.data)
        return Response({"data": catser.data})

    def update(self, request, pk=None):
        return Response(pk)

    def partial_update(self, request, pk):
        return Response(pk=None)

    def retrieve(self, request, pk=None):
        return Response(pk)

