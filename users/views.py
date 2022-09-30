from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from .models import CustomUsers
from .serializers import UsersSerializer

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

"""
class UsersView(GenericViewSet):

    serializer_class = UsersSerializer
    queryset = CustomUsers.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['email', 'company_name']

    def list(self, request):
        items = self.get_serializer(self.get_queryset(), many=True)
        return Response(items.data)

    def create(self, request):
        userser = UsersSerializer(data=request.data)
        if userser.is_valid():
            userser.save()
            return Response({"data": userser.data})
        return Response({"data": "errors"})

    def retrieve(self, request, pk):
        item = self.get_queryset().filter(id=pk).first()
        useser = UsersSerializer(item)
        return Response(useser.data)

    def destroy(self, request, pk=None):
        if pk is None:
            self.get_queryset().delete()
            return Response("all deleted")
        else:
            self.get_queryset().filter(id=pk).delete()
            return Response("single seleted")

    def update(self, request, pk):
        userser = UsersSerializer(data=request.data)
        if userser.is_valid():
            userser.save()
            return Response(userser.data)
        return Response(pk)


    def partial_update(self, request, pk=None):
        useser = UsersSerializer(self.get_queryset(), data=request.data, partial=True)
        if useser.is_valid():
            useser.save()
            return Response(useser.data)
        return Response("errors")
"""

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter



from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView

class GoogleLogin(SocialLoginView): # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    callback_url = "/auth/google/login/callback/"#CALLBACK_URL_YOU_SET_ON_GOOGLE
    client_class = OAuth2Client
"""
class GoogleLogin(SocialLoginView): # if you want to use Implicit Grant, use this
    adapter_class = GoogleOAuth2Adapter

"""


from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

