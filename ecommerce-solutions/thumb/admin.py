from django.contrib import admin
from django.utils.html import format_html
from .models import ProductImage, ProductWithImage

class ProductImageAdmin(admin.ModelAdmin):
    def image_tag(self, obj):
        return format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.img.url))

    list_display = ['product', 'image_tag', 'uploaded_on']

class ProductWithImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'images', 'status']

admin.site.register(ProductImage, ProductImageAdmin)
admin.site.register(ProductWithImage)#, ProductWithImageAdmin)
