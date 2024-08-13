from django.contrib import admin
from django.utils.html import format_html
from .models import ProductImage, ProductWithImage

class ProductImageAdmin(admin.ModelAdmin):
    def image_tag(self, obj):
        return format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.img.url))

    list_display = ['product', 'image_tag', 'uploaded_on']

class ProductWithImageAdmin(admin.ModelAdmin):
    def images_tag(self, obj):
        imgs = obj.images.all()
        li = ""
        for img in imgs:
            print(img.img)
            li+='<img src="{}" style="max-width:150px; max-height:150px; margin:10px;"/>'.format(img.img.url)            
        return format_html(li)# format_html('<img src="{}" style="max-width:200px; max-height:200px"/>'.format(obj.images.all()[0].img.url))
    list_display = ['product', "images_tag", 'status']

admin.site.register(ProductImage, ProductImageAdmin)
admin.site.register(ProductWithImage, ProductWithImageAdmin)
