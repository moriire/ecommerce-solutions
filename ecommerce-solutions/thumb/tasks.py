from celery import shared_task
from django.core.mail import send_mail, send_mass_mail
from time import sleep




from django.core.mail import get_connection, EmailMessage, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

def send_html_email_to_multiple_users(subject, recipient_list, context_data):
    # Load your HTML template for the email
    html_message = render_to_string('email_template.html', context_data)
    plain_message = strip_tags(html_message)

    # Open a single connection to the email server
    connection = get_connection()
    connection.open()

    # Create EmailMessage object and send emails
    email_messages = []
    for recipient in recipient_list:
        email =  EmailMessage(
            subject,
            plain_message,  # Fallback message if HTML is not supported
            'from@example.com',  # Sender email
            [recipient],  # Recipient email
            connection=connection,
        )
        email.content_subtype = 'html'  # Mark this email as HTML
        email.attach_alternative(html_message, "text/html")
        email_messages.append(email)

    # Send all emails at once
    connection.send_messages(email_messages)
    connection.close()


@shared_task()
def send_notification_email_to_customers_task(email_addresses, product_detail):
    """Sends an email notification to subscribed buyers"""

    html_message = render_to_string('notifications/product_upload_subscribers.html', product_detail)
    plain_message = strip_tags(html_message)

    connection = get_connection()
    connection.open()
    
    email_messages = []
    for email_address in email_addresses:
        email = EmailMultiAlternatives(
            "New Product You May Like",\
            plain_message,  # Fallback message if HTML is not supported
            'from@example.com',
            [email_address],
            connection=connection,
        )
        email.content_subtype = 'html'  # Mark this email as HTML
        email.attach_alternative(html_message, "text/html")
        email_messages.append(email)

    # Send all emails at once
    connection.send_messages(email_messages)
    connection.close()
    """
    messages = ((
        "New Product You May Like",\
        f"\t{product_detail}\n\nThank you!",\
        "support@example.com",\
        [email_address],\
        ) for email_address in email_addresses
    )
    send_mass_mail(
        messages,
        fail_silently=False,
    )
    """