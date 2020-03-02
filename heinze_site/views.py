from django.shortcuts import render, redirect


# Create your views here.

def index(request):
    return render(request, 'heinze_site/index.html')


def send_mail(request):
    if request.method == 'POST':
        print(request)
    return redirect('index')