from django.urls import path
from .views import GoogleLogin, FacebookLogin

urlpatterns = [
    path('/google/', GoogleLogin.as_view(), name='google_login'),
    path('/facebook/', FacebookLogin.as_view(), name='fb_login')
]
