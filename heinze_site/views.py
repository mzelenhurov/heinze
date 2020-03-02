from django.shortcuts import render, redirect


# Create your views here.

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
    return redirect('index')