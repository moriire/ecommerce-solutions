from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model
User = get_user_model()

class CustomTokenObtainSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims or additional information to the token
        token['username'] = user.username
        token['id'] = user.email
        return token
    
    def validate(self, attrs):
        data = super().validate(attrs)
        data["user"] ={
            'id': self.user.id,
            'username': self.user.username
        }
        return data
    

class CustomTokenView(TokenObtainPairView):
    serializer_class = CustomTokenObtainSerializer

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
                    "id",
                    "username",
                    #"first_name",
                    #"last_name",
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