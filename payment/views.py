from rest_framework.viewsets import ViewSet, ModelViewSet
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from py4paystack import Paystack
from rest_framework.parsers import JSONParser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import PaystackHook, PaystackHookSerializer, TransactionSerializer
from django.views.decorators.csrf import csrf_exempt
pays = Paystack()

class PaystackHookView(ModelViewSet):
    serializer_class = PaystackHookSerializer
    queryset = PaystackHook.objects.all()
    def create(self, request):
        data = request.data
        #body = data.get("body")
        #if body.get("event") == "charge.success":
        PaystackHook.objects.create(
                body = data#body.get("data")
            )
        return Response({"status": 200})
        #return Response({"data": {"status": 400, "body": data}})#ser.errors)

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

    def destroy(self, request, pk=None):
        if pk is None:
            self.get_queryset().delete()
            return Response("all deleted")
        else:
            self.get_queryset().filter(id=pk).delete()
            return Response("single seleted")

class TransactionView(ViewSet):
    def create(self, request):
        p = pays.Transaction(**request.data)
        resp = p.initialize()
        ser = TransactionSerializer(resp)
        return Response({"data": ser.data})