from django.db import models
from users.models import CustomUsers
from rest_framework import serializers

class PaystackHook(models.Model):
    body = models.JSONField()
    created_on = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.created_on

class PaystackHookSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaystackHook
        fields = "__all__"

class TransactionSerializer(serializers.Serializer):
    authorization_url = serializers.URLField()
    #amount = serializers.FloatField()
    class Meta:
        fields = ('authorization_url'
            "access_code",
            "reference"
            )
