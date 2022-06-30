from django.urls import path
"""
, include
from rest_framework import routers
from . import views

route = routers.DefaultRouter()
route.register("category", views.CategoryListView)


urlpatterns = [
    #path('category/', views.CategoryListView.as_view(), name="category-home"),
    path(r"category", include(route.urls)),
]
"""
