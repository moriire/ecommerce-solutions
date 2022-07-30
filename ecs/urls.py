from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from products.views import CategoryView, ProductView, ReviewsView
#from vendors.views import VendorsView
from users.views import UsersView
from thumbs.views import ProductImageView
from flash.views import FlashSalesView
from bargains.views import BargainVendorsView

from users import views
import users

route = routers.DefaultRouter(trailing_slash=False)
route.register("categories", CategoryView)
route.register("products", ProductView)
route.register("reviews", ReviewsView)
route.register("users", UsersView)
route.register("thumbs", ProductImageView)
route.register("flash", FlashSalesView)
route.register("bargains", BargainVendorsView)

urlpatterns = [
        path('api/auth/', include('dj_rest_auth.urls')),
        path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
        path('auth/', include('allauth.urls')),
        path("", views.index, name="home"),
        path("home/<str:path>", views.index, name="home-with-path"),
        path('api/', include(route.urls)),
        #path('auth/social', include('users.urls')),
        path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
