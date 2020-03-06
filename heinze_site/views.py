import csv

from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.core.mail import send_mail as send_mail_to, BadHeaderError
from heinze.settings import MAIL_SENDER_EMAIL
from heinze_site.models import Temp


def index(request):
    propertiies = Temp.objects.values('property').distinct()
    data = []
    for i in propertiies:
        prop = Temp.objects.filter(property=i.get('property')).first()
        values = []
        temp_values = Temp.objects.filter(property=i.get('property')).values('value').distinct()
        for v in temp_values:
            values.append(v.get('value'))
        data.append({'id': prop.id, 'property': prop.property, 'values': values})

    return render(request, 'heinze_site/index.html', {'data': data})


def send_mail(request):
    if request.method == 'POST':
        data = request.POST
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
    return render(request, 'heinze_site/index.html')


def upload_data(request):
    with open('tsv/leadselectdata.tsv') as fd:
        rd = csv.reader(fd, delimiter="\t", quotechar='"')
        for row in rd:
            print(row)
            if row[0] == 'orgID':
                continue
            Temp.objects.create(orgID=row[0],
                                country=row[1],
                                zip=row[2],
                                city=row[3],
                                latitude=row[4],
                                longitude=row[5],
                                propertyID=row[6],
                                property=row[7],
                                valueID=row[8],
                                value=row[9])