from djoser.serializers import TokenCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUsers
#from djoser.serializers import UserSerializer
User = get_user_model()
class CustomTokenCreateSerializer(TokenCreateSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        User = get_user_model()
        user = User.objects.get(username=self.user.username)
        data['id'] = self.user.id
        data['username'] = self.user.username

        return data
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
                    "id",
                    "username",
                    "first_name",
                    "last_name",
                    "phone",
                     "email",
                     "password",
                      "vendor",
                      "subscribe",
                      "is_active",
                      "is_superuser",
                      "img",
                      "get_full_name"
                      )
