from django.shortcuts import render
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from .models import Users
from .serializers import UsersSerializer

def index(request):
    return render(request, "users/index.html", {})

class UsersView(GenericViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()
    def list(self, request):
        return Response("hello")

    def create(self, request):
        return Response("hello")

    def retrieve(self, request, pk=None):
        return Response("hello")
    def destroy(self, request, pk=None):
        return Response("hello")
    def partial_update(self, request, pk=None):
        return Response("hello")


