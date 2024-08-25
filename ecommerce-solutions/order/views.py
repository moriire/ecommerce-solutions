from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from order.models import Order, Ordered
from order.serializers import OrderedSerializer, OrderSerializer, XOrderSerializer
from rest_framework.response import Response

class OrderedView(ModelViewSet):
    queryset = Ordered.objects.all()
    serializer_class = OrderedSerializer

class OrderView(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=True, methods=["GET"])
    def get_orders(self, request, pk=None):
        item = self.get_queryset().get(created_by__pk=pk)#.prefetch_related("carts").select_related("created_by")
        ser = XOrderSerializer(item)
        return Response(ser.data)
    
    @action(detail=False, methods=["POST"])
    def payment_hook(self, request):
        data = request.data
        match data["event"]:
            case 'charge.success':
                details = data["data"]
                authorization_code = details["authorization"].get("authorization_code")
                reference = details.get("reference")
                self.get_queryset().get()
                print(details)
                print(
                     "success", 
                      authorization_code, 
                      reference
                      )
                return Response({"data": "received"})
            case _:
                print(type(data))