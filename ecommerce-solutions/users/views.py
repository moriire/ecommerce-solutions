from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.response import Response
from .models import CustomUsers
from .serializers import UsersSerializer#, UserSerializer

from rest_framework import filters

def index(request, **kw):
    return HttpResponseRedirect("/api/")
    
def privacy_policy(request):
    return render(request, "account/verification_success.html", {})

def terms_of_service(request):
    return render(request, "account/verification_success.html", {})

def account_delete(request):
    return render(request, "account/verification_success.html", {})


def email_verified(request):
    return render(request, "account/verification_success.html", {})

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework import generics
from profile.models import Profile, ProfileSerializer
from rest_framework.permissions import IsAuthenticated

class ProfileView(ModelViewSet):
    queryset = CustomUsers.objects.all()
    serializer_class = UsersSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]

from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            print(refresh_token)
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)