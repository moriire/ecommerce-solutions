from django.contrib import admin
from .models import Shipping, LocationPriceModel
admin.site.register(Shipping)

class LocationPricingModelAdmin(admin.ModelAdmin):
    list_display = ['city', "price"]

admin.site.register(LocationPriceModel, LocationPricingModelAdmin)

