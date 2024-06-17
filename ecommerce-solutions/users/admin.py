from django.contrib import admin
from .models import CustomUsers
admin.site.register(CustomUsers)
#"""""
from fastadmin import DjangoModelAdmin, register
@register(CustomUsers)
class UserAdmin(DjangoModelAdmin):
    exclude = ("hash_password",)
    list_display = ("id", "username", "is_superuser", "is_active")
    list_display_links = ("id", "username")
    list_filter = ("id", "username", "is_superuser", "is_active")
    search_fields = ("username",)

    def authenticate(self, email, password):
        obj = CustomUsers.objects.filter(email=email, is_superuser=True).first()
        if not obj:
            return None
        if not obj.check_password(password):
            return None
        return obj.id
#"""""