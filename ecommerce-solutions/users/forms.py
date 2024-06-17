from allauth.account.forms import SignupForm
from allauth.account.adapter import DefaultAccountAdapter
from django import forms
from django.utils.translation import gettext, gettext_lazy as _, pgettext
class NewAllauthAdapter(DefaultAccountAdapter):
    def save_user(self, request, user, form, commit=True):
        """
        Saves a new `User` instance using information provided in the
        signup form.
        """
        from allauth.account.utils import user_email, user_field
        data = form.cleaned_data
        user.username = None
        user.full_name = data.get("full_name")
        user.phone = data.get("phone")
        email = data.get("email")
        user_email(user, email)
        #if full_name:
            #user_field(user, "full_name", full_name)
        if "password1" in data:
            user.set_password(data["password1"])
        else:
            user.set_unusable_password()
        #self.populate_username(request, user)
        if commit:
            # Ability not to commit makes it easier to derive from
            # this adapter by adding
            user.save()
        return user

class SocialPasswordedSignupForm(SignupForm):
    field_order = ['full_name', "phone", 'email', 'password1', 'password2',  "subscribe"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Remove autofocus because it is in the wrong place
        #del self.fields["username"].widget.attrs["autofocus"]

    full_name = forms.CharField(
        label=_("Full Name"),
        required=True,
        widget=forms.TextInput(
            attrs={"type": "text", "placeholder": _("Surname Lastname"), "required": True}
        ),
    )
    phone = forms.IntegerField(
        label=_("Phone"),
        required=True,
        widget=forms.TextInput(
            attrs={"type": "tel", "placeholder": _("Mobile Phone: 08100482341")}
        ),
    )

    subscribe = forms.BooleanField(
        label=_("Are you a vendor?"),
        widget=forms.CheckboxInput(
            attrs={"checked": True}
        ),
        )

    """
    def custom_signup(self, request, user):
        user.full_name = self.cleaned_data["full_name"]
        user.phone = self.cleaned_data["phone"]
        user.subscribe = self.cleaned_data["subscribe"]
        user.save()
    """

