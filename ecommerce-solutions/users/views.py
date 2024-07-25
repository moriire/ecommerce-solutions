from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.response import Response
from .models import CustomUsers
from .serializers import UsersSerializer, UserSerializer

from rest_framework import filters

def index(request, **kw):
    return render(request, "users/index.html", {})

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
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]


from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from dj_rest_auth.social_serializers import TwitterLoginSerializer
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

class TwitterLogin(SocialLoginView):
    serializer_class = TwitterLoginSerializer
    adapter_class = TwitterOAuthAdapter

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class GoogleLogin(SocialLoginView): # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    callback_url = "/auth/google/login/callback/"#CALLBACK_URL_YOU_SET_ON_GOOGLE
    client_class = OAuth2Client

