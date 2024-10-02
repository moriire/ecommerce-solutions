import os
from celery import Celery
from django.conf import global_settings as settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ecs.settings")
app = Celery("ecs")

app.autodiscover_tasks(settings.INSTALLED_APPS)
app.conf.broker_url = 'redis://redis:6379/0'
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()