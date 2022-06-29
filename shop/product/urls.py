from django.urls import path
from . import views
urlpatterns = [
    path('product/', views.ProductListView.as_view(), name="product-list"),
]
