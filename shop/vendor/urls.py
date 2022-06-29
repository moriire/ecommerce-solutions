from django.urls import path
from . import views
urlpatterns = [
    path('vendor/', views.VendorListView.as_view(), name="profile-list"),
]
