from rest_framework import serializers
from .models import Users

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = (
                    "first_name", 
                    "last_name", 
                    "phone", 
                     "email", 
                     "password",
                      "vendor"
                      )

    
   
