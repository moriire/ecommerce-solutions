from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from users.serializers import CutomObtainPairView
from rest_framework import routers
from product.views import CategoryView, ProductView, ReviewsView
from packages.views import PackagesView
#from users.views import UsersView
from profile.views import ProfileView
from cart.views import CartView
from order.views import OrderView, OrderedView
from wishlist.views import WishListView
from shipping.views import ShippingViews, LocationPricingViews
from thumb.views import ProductImageView, ProductWithImageView, PagedProductWithImageView
from flash.views import FlashSalesView
from bargains.views import BargainVendorsView
#from payment.views import TransactionView, PaystackHookView
from rest_framework import permissions
from users import views
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
#from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.urls import path
schema_view = get_schema_view(
    openapi.Info(
        title="Megadey API Snippets",
        default_version='v1.0.1',
        description="Megadey is vendor-product marketting platform",
        website="https://www.megadey.org/",
        terms_of_service="https://www.megadey.org/check/terms_of_services/",
        privacy_policy="https://www.megadey.org/check/privacy_policy/",
        contact=openapi.Contact(email="ibmabdulsalam@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)
#import users

route = routers.DefaultRouter(trailing_slash=False)
route.register("packages", PackagesView)
route.register("categories", CategoryView)
route.register("product", ProductView)
route.register("cart", CartView)
route.register("ordered", OrderedView)
route.register("order", OrderView)
route.register("reviews", ReviewsView)
route.register("wishlist", WishListView)
route.register("users", views.ProfileView)
route.register("profile", ProfileView)
route.register("shipping", ShippingViews)
route.register("shipping-cost", LocationPricingViews)
route.register("thumbs", ProductImageView)
route.register("product-with-images", PagedProductWithImageView, basename="product_with_images")
route.register("normal-product-with-images", ProductWithImageView, basename="normal_product_with_images")
route.register("flash", FlashSalesView)
route.register("bargains", BargainVendorsView)
#route.register("transaction", TransactionView, basename="transaction")

urlpatterns = [
        re_path(r'^api/', include(route.urls)),
        path("", views.index, name="home"),
        path('auth/jwt/create/', CutomObtainPairView.as_view(), name='customtoken'),
        path('api/auth/', include('djoser.urls')),
        path('api/auth/', include('djoser.social.urls')),
        path('api/auth/', include('djoser.urls.jwt')),
        #path('check/privacy_policy/', views.privacy_policy, name="privacy_policy"),
        #path('check/terms_of_service/', views.terms_of_service, name="terms_of_service"),
        #path('check/account_delete/', views.account_delete, name="account_delete"),
       path('admin/', admin.site.urls),
        path('docs/', include_docs_urls(title='Megadey Api Endpoints')),
        re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
        #path(f"{fast_settings.ADMIN_PREFIX}/", get_admin_urls())
]
#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
