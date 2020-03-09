import csv

from django.http import HttpResponse
from django.shortcuts import render
from django.core.mail import send_mail as send_mail_to, BadHeaderError
from heinze.settings import MAIL_SENDER_EMAIL
from heinze_site.models import LeadSelectData


from django.db import connection


def index(request):
    propertiies = LeadSelectData.objects.values('property').distinct()
    data = []
    for i in propertiies:
        prop = LeadSelectData.objects.filter(property=i.get('property')).first()
        values = []
        temp_values = LeadSelectData.objects.filter(property=i.get('property')).values('value').distinct()
        for v in temp_values:
            value = LeadSelectData.objects.filter(value=v.get('value')).first()
            count = LeadSelectData.objects.filter(value=v.get('value')).count()
            values.append({'id': value.id, 'value': v.get('value'), 'count': count})
        data.append({'id': prop.id, 'property': prop.property, 'values': values})
    # if LeadSelectData.objects.first():
    #     with connection.cursor() as cursor:
    #         cursor.execute("""SELECT COUNT(*)
    #                 FROM (SELECT DISTINCT orgID FROM leadSelectData) f
    #                 JOIN leadSelectData m2618 ON f.orgID = m2618.orgID AND m2618.propertyID = 2617 AND m2618.valueID = 2618
    #                 JOIN leadSelectData m2596 ON f.orgID = m2596.orgID AND m2596.propertyID = 2595 AND m2596.valueID = 2596
    #                 JOIN leadSelectData m1766 ON f.orgID = m1766.orgID AND m1766.propertyID = 1384 AND m1766.valueID = 1766""")
    #         row = cursor.fetchone()
    #         # print(row)
    #         print(row[0])
    return render(request, 'heinze_site/index.html', {'data': data})


def endpoint(request):
    print(request)
    return 10


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
            if row[0] == 'orgID':
                continue
            LeadSelectData.objects.create(orgID=row[0],
                                country=row[1],
                                zip=row[2],
                                city=row[3],
                                latitude=row[4],
                                longitude=row[5],
                                propertyID=row[6],
                                property=row[7],
                                valueID=row[8],
                                value=row[9])