from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('send_mail', views.send_mail, name='send_mail'),
    path('upload_data', views.upload_data, name='upload_data'),
    path('endpoint', views.endpoint, name='endpoint'),
    ]