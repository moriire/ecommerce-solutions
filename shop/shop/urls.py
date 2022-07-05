from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from category.views import CategoryView
from product.views import ProductView
from vendor.views import VendorView
from users.views import UsersView
from thumb.views import ProductImageView
from flash.views import FlashSalesView

from users import views

route = routers.DefaultRouter()
route.register("category", CategoryView)
route.register("product", ProductView)
route.register("vendor", VendorView)
route.register("users", UsersView)
route.register("thumb", ProductImageView)
route.register("flash", FlashSalesView)

urlpatterns = [
        path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
        path("", views.index, name="home"),
        path("home/<str:path>", views.index, name="home-with-path"),
        path('api/', include(route.urls)),
        path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
