from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-r=$0rdnt+qqwo!82q(aoxu6nnq3)7q^lag)u)j+m(1*)pb738='

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.sites',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    #"fastadmin",
    'django.contrib.staticfiles',
    'django.contrib.messages',
    #"storages",
    "djoser",
    "rest_framework",
    'rest_framework_simplejwt',
     #'rest_framework_simplejwt.token_blacklist',
     "corsheaders",
    'coreapi',
    'drf_yasg',
    "users",
    "profile",
    "product",
    "thumb",
    "cart",
    "wishlist",
    "shipping",
    "order",
    "packages",
    "flash",
    "bargains",
    "payment",
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'ecs.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR, 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ecs.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        #'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema'
}

if not DEBUG:
    REST_FRAMEWORK["DEFAULT_RENDERER_CLASSES"] = (
            "rest_framework.renderers.JSONRenderer",
        )
AUTHENTICATION_BACKENDS = [
    'social_core.backends.google.GoogleOAuth2',
    'social_core.backends.facebook.FacebookOAuth2',
    'social_core.backends.twitter.TwitterOAuth',  
    'users.backend.EmailOrUsernameBackend',
    'django.contrib.auth.backends.ModelBackend',
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173"
    ]

CORS_ORIGIN_ALLOW_ALL = True

AUTH_USER_MODEL = "users.CustomUsers"

# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "mediafiles"

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

DJOSER = {
    "EMAIL_FRONTEND_PROTOCOL": "http",
    "EMAIL_FRONTEND_DOMAIN": "localhost:5173",
    "EMAIL_FRONTEND_SITE_NAME": "DooDoo",
   'LOGIN_FIELD' : 'email',
    'USERNAME_CHANGED_EMAIL_CONFIRMATION' : True,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION' : True,
    'SEND_EMAIL_CONFIRMATION' : True,
    'SET_USERNAME_RETYPE' : True,
    'SET_PASSWORD_RETYPE' : True,
    'USERNAME_RESET_CONFIRM_URL' : 'password/reset/confirm/{uid}/{token}',
    'PASSWORD_RESET_CONFIRM_URL' : 'email/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL' : 'auth/activate/{uid}/{token}',
    "SEND_CONFIRMATION_EMAIL": True,
    'SEND_ACTIVATION_EMAIL' : True,
     "USER_ID_FIELD": "id",
     "EMAIL": {"activation": "users.emails.ActivationEmail"},
     "SERIALIZERS":{
         "token_create": "users.serializers.CustomTokenObtainSerializer",
          
     },
     'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': [
        'http://localhost:8000/temporary-redirect-for-testing/',
    ]
}

from datetime import timedelta
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'AUTH_HEADER_TYPES': ('Bearer',),
    'ALGORITHM': 'HS256',
}
SITE_ID = 1
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
#EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_HOST = "127.0.0.1"
EMAIL_PORT = 1025

DEFAULT_FROM_EMAIL = 'webmaster@localhost'  # Set your email address
EMAIL_SUBJECT_PREFIX = '[Your Project]'  # Optional: Add a prefix to email subject lines
SERVER_EMAIL = 'root@localhost'

# Social Auth keys (Get these from Google/Facebook/Twitter developer console)
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = ''
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = ''

SOCIAL_AUTH_FACEBOOK_KEY = ''
SOCIAL_AUTH_FACEBOOK_SECRET = ''

SOCIAL_AUTH_TWITTER_KEY = ''
SOCIAL_AUTH_TWITTER_SECRET = ''

# Default redirect for successful social login
SOCIAL_AUTH_REDIRECT_IS_HTTPS = True