from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from profiles.models import Profile
from .models import ProfileSerializer, ProfileExpandSerializer

from rest_framework import filters

class ProfileView(ModelViewSet):
    """
    profile: /api/users/:id


    """
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all().select_related()
    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        catser = ProfileExpandSerializer(items, many=True)
        return Response({"data": catser.data,})

    def retrieve(self, request, pk):
        item = self.get_queryset().get(store_slug = pk)
        catser = ProfileExpandSerializer(item)
        return Response({"data": catser.data,})
    #filter_backends = [filters.SearchFilter]
    #search_fields = ['email', 'company_name']

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
