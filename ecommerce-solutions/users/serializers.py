from rest_framework import serializers
from .models import CustomUsers

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

from rest_framework import serializers
from dj_rest_auth.serializers import UserDetailsSerializer
from profile.models import Profile, ProfileExpandSerializer, ProfileSerializer

from rest_framework.authentication import SessionAuthentication, BasicAuthentication

class UserSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = (
                    "id",
                    "username"
        )
    