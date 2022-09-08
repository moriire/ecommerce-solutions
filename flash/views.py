from django.shortcuts import render
from .models import Flash, FlashSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
class FlashSalesView(ModelViewSet):
    serializer_class = FlashSerializer
    queryset = Flash.objects.all()
    """
    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
            catser = self.get_serializer(items, many=True)
        return Response({"data": catser.data})

    def retrieve(self, request, pk):
        item = self.get_queryset().filter(id=pk).first()
        catser = self.get_serializer(item)
        return Response(catser.data)

    def create(self, request):
        data = request.data
        plan_code = data["plan_code"]
        email = request.user.email
        catser = self.get_serializer(data=request.data)
        if catser.is_valid():

            try:
                s = sub(email=email, plan_code=plan_code).create()
            except Exception as e:
                return Response(str(e))
            finally:
                catser.validated_data["sub_data"] = s

                catser.save()
            return Response({"data": catser.data})
        return Response(catser.errors)


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
    """
