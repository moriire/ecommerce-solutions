from djoser import email
from djoser import utils
from djoser.conf import settings
from django.contrib.auth.tokens import default_token_generator

from django.core.mail import send_mail
from django.template.loader import render_to_string


class ActivationEmail(email.ActivationEmail):
    template_name = 'account/email/activation.html'

    def get_context_data(self):
        # ActivationEmail can be deleted
        context = super().get_context_data()

        user = context.get("user")
        context['user'] = user.username
        context["uid"] = utils.encode_uid(user.id)
        context["token"] = default_token_generator.make_token(user)
        context["url"] = settings.ACTIVATION_URL.format(**context)
        return context

    