from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.core.mail import send_mail as send_mail_to, BadHeaderError

# Create your views here.
from heinze.settings import MAIL_SENDER_EMAIL


def index(request):
    return render(request, 'heinze_site/index.html')


def send_mail(request):
    if request.method == 'POST':
        data = request.POST
        print(data)
        firstname = data.get('firstname', None)
        secondname = data.get('secondname', None)
        firm = data.get('firm', None)
        website = data.get('website', None)
        email = data.get('email', None)
        phonenumber = data.get('phonenumber', None)
        try:
            email_message = 'firstname: {}\n secondname: {}\n firm: {}\n website: {}\n phonenumber:{}'.format(
                firstname,
                secondname,
                firm,
                website,
                phonenumber,
                )
            confirm_message = 'Thank you for contacting'
            send_mail_to(email, email_message, MAIL_SENDER_EMAIL, [MAIL_SENDER_EMAIL])
            send_mail_to('Mail', confirm_message, MAIL_SENDER_EMAIL, [email])
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
    return redirect('index')