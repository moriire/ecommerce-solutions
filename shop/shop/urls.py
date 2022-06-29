from django.conf.urls.static import static                                from django.conf import settings
from django.contrib import admin
from django.urls import path, include
import product

urlpatterns = [
    #path('api/', include('product.urls')),
    path('api/', include('category.urls')),
    path('api/', include('product.urls')),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    #urlpatterns = urlpattern

