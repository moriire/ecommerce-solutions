from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
User = get_user_model()
class TokenObtainSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        data["user"] = self.user.USERNAME_FIELD
        data["id"] = self.user.id

        return data
    
class CutomObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainSerializer

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