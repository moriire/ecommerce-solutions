from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from .models import Users
from .serializers import UsersSerializer

@login_required
def index(request, path=None):
    return render(request, "users/index.html", {})

class UsersView(GenericViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()
    def list(self, request):
        items = UsersSerializer(self.queryset, many=True)
        return Response(items.data)

    def create(self, request):
        userser = UsersSerializer(data=request.data)
        if userser.is_valid():
            userser.save()
            return Response({"data": userser.data})
        return Response({"data": "hello"})

    def retrieve(self, request, pk=None):
        return Response("hello")
    def destroy(self, request, pk=None):
        return Response("hello")
    def partial_update(self, request, pk=None):
        return Response("hello")


