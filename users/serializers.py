from rest_framework import serializers
from .models import CustomUsers

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUsers
        fields = (
                    "id",
                    "full_name",
                    "username",
                    "phone",
                     "email",
                     "password",
                      "vendor",
                      "subscribe",
                      "is_active",
                      "is_superuser",
                      "img",
                      "get_short_name"
                      )



