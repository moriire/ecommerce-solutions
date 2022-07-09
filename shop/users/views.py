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
        items = UsersSerializer(self.get_queryset(), many=True)
        return Response(items.data)

    def create(self, request):
        userser = UsersSerializer(data=request.data)
        if userser.is_valid():
            userser.save()
            return Response({"data": userser.data})
        return Response({"data": "errors"})

    def retrieve(self, request, pk=None):
        item = self.get_queryset().filter(id=pk).first()
        useser = UsersSerializer(item)
        return Response(useser.data)

    def destroy(self, request, pk=None):
        if pk is None:
            self.get_queryset().delete()
            return Response("all deleted")
        else:
            self.get_queryset().filter(id=pk).delete()
            return Response("single seleted")

    def update(self, request, pk=None):
        userser = UsersSerializer(data=request.data)
        if userser.is_valid():
            userser.save()
            return Response(userser.data)
        return Response(pk)


    def partial_update(self, request, pk=None):
        useser = UsersSerializer(data=request.data, partial=True)
        if useser.is_valid():
            useser.save()
            return Response(useser.data)
        return Response("errors")


