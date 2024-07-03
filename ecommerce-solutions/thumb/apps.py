from django.apps import AppConfig

class ThumbConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'thumb'

    def ready(self) -> None:
        import thumb.signals
