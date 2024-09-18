from celery import shared_task
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
User = get_user_model()

@shared_task()
def send_notification_email_to_customers_task(email_addresses, message):
    customers = User.objects.filter(vendor = True)
    """Sends an email when the feedback form has been submitted."""
    sleep(20)  # Simulate expensive operation(s) that freeze Django
    send_mail(
        "Your Feedback",
        f"\t{message}\n\nThank you!",
        "support@example.com",
        [email_address],
        fail_silently=False,
    )