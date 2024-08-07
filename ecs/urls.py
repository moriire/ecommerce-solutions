from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path

from rest_framework import routers
from products.views import CategoryView, ProductView, ReviewsView
from packages.views import PackagesView
#from users.views import UsersView
from profiles.views import ProfileView
from thumbs.views import ProductImageView
from flash.views import FlashSalesView
from bargains.views import BargainVendorsView
from payment.views import TransactionView, PaystackHookView
from rest_framework import permissions
from users import views
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
#from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls



# Swagger documentation setup
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
route.register("products", ProductView)
route.register("reviews", ReviewsView)
#route.register("users", UsersView)
route.register("profile", ProfileView)
route.register("thumbs", ProductImageView)
route.register("flash", FlashSalesView)
route.register("bargains", BargainVendorsView)
route.register("transaction", TransactionView, basename="transaction")
route.register("payhook", PaystackHookView)

urlpatterns = [
        path('api/auth/facebook/', views.FacebookLogin.as_view(), name='fb_login'),
        path('api/auth/google/', views.GoogleLogin.as_view(), name='google_login'),
        path('api/auth/', include('dj_rest_auth.urls')),
        path('auth/email-success', views.email_verified, name="email-success"),
        path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
        re_path(r'^api/v1/', include(route.urls)),
        path("", views.index, name="home"),
        path("<str:page>", views.index, name="home_one"),
        path("<str:page>/<str:path>", views.index, name="home_two"),
        path("<str:page>/<str:path>/<str:others>", views.index, name="home_three"),
        path("<str:page>/<str:path>/<str:others>/<str:last>", views.index, name="home_four"),
        path('check/privacy_policy/', views.privacy_policy, name="privacy_policy"),
        path('check/terms_of_service/', views.terms_of_service, name="terms_of_service"),
        path('check/account_delete/', views.account_delete, name="account_delete"),
        path('admin/', admin.site.urls),


        path('docs/', include_docs_urls(title='Megadey Api Endpoints')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
