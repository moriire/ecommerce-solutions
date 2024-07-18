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
    profile = ProfileSerializer(source="user_profile")
    
    class Meta(UserDetailsSerializer.Meta):
        model = CustomUsers
        #fields = ("first_name", "phone", "profile")
        fields = UserDetailsSerializer.Meta.fields + ('profile', "phone")# + ("username",)

    def update(self, instance, validated_data):
        userprofile_serializer = self.fields['profile']
        userprofile_instance = instance.user_profile
        userprofile_data = validated_data.pop('userprofile', {})

        # to access the 'company_name' field in here
        # company_name = userprofile_data.get('company_name')

        # update the userprofile fields
        userprofile_serializer.update(userprofile_instance, userprofile_data)
        instance = super().update(instance, validated_data)
        return instance