from rest_framework import serializers
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from djoser.serializers import UserSerializer as BaseUserSerializer
from django.contrib.auth.backends import ModelBackend
from .models import CustomUsers
from djoser.serializers import UserSerializer

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        model = CustomUser
        fields = ('id', "first_name", "last_name", 'username', 'email', 'password')

class EmailOrUsernameBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(email=username) if '@' in username else User.objects.get(username=username)
        except User.DoesNotExist:
            return None
        
        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None

class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        model = User
        fields = ('id', 'username')


class CustomUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = CustomUsers
        fields = ['id', 'username' ]

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUsers
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