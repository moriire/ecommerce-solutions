from rest_framework import serializers
from .models import Users

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = (
                    "full_name", 
                    "phone", 
                     "email", 
                     "password",
                      "vendor",
                      "subscribe",
                      "get_short_name"
                      )

    
   
