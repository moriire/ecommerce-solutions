from django.contrib import admin
from .models import Category
class CatAdmin(admin.ModelAdmin):
    #list_display = ['title', 'body']
    prepopulated_fields = {'slug': ('name',)} # new
admin.site.register(Category, CatAdmin)

# Register your models here.
