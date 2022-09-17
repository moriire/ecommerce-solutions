from django.shortcuts import render
from .models import Packages, PackageSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
import json
from py4paystack import Plan

class PackagesView(ModelViewSet):
    serializer_class = PackageSerializer
    queryset = Packages.objects.all()
    """""
    def list(self, request):
        items = self.get_queryset()#Plan().list()#self.get_queryset()
        catser = self.get_serializer(items, many=True)
        return Response({"data": catser.data})
    
    def create(self, request):
        data = request.data
        catser = self.get_serializer(data=data)
        if catser.is_valid():
            try:
                plan = Plan(
                    name = data.get("name"),
                    interval = data.get("interval"),
                    amount = data.get("amount"),
                )
                created_plan = plan.create()
                #catser.validated_data["plan_data"] = created_plan
                catser.validated_data["plan_code"] = created_plan.get("plan_code")
                catser.save()
                return Response({"data": catser.data})
            except Exception as e:
                return Response(json.dumps(str(e)))
        return Response(catser.errors)

    def retrieve(self, request, pk=None):
        try:
            item = self.get_queryset().filter(id=pk).first()
            get_plan = Plan().fetch(item.plan_code)
        except AttributeError as e:
            get_plan = item
        except Exceptions as e:
            return Response(str(e))
        finally:
            catser = self.get_serializer(item)
        return Response(catser.data)
    """""
    def destroy(self, request, pk=None):
        plan_code = self.get_queryset().filter(id=pk).first()
        try:
            z = Plan().delete(id_or_code = plan_code.plan_code)
        except:
            pass
        finally:
            self.get_queryset().filter(id=pk).delete()
        return Response("dleeted")

    def update(self, request, pk=None):
        data = request.data
        instance = self.get_object()
        item = self.get_queryset().filter(id=pk).first()
        pc = item.plan_code
        ser = self.get_serializer(instance, data=request.data, partial=True)
        if ser.is_valid():
            try:
                plan = Plan()
                res = plan.update(id_or_code=pc,
                                    name=data.get("name", None),
                                    amount=data.get("amount", None),
                                    interval=data.get("interval", None)
                                    )
                ser.validated_data["plan_data"] = res
                ser.validated_data["plan_code"] = res.get("plan_code")
                ser.save()
            except Exception as e:
                return Response(str(e))
        return Response(ser.data)

    def partial_update(self, request, pk=None):
        useser = self.get_serializer(self.get_queryset(), data=request.data, partial=True)
        if useser.is_valid():
            useser.save()
            return Response(useser.data)
        return Response("errors")