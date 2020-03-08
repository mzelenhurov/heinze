# Generated by Django 3.0.3 on 2020-03-06 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Temp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orgID', models.IntegerField(blank=True, null=True)),
                ('country', models.CharField(blank=True, max_length=255, null=True)),
                ('zip', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=255, null=True)),
                ('latitude', models.CharField(blank=True, max_length=255, null=True)),
                ('longitude', models.CharField(blank=True, max_length=255, null=True)),
                ('propertyID', models.IntegerField(blank=True, null=True)),
                ('property', models.CharField(blank=True, max_length=255, null=True)),
                ('valueID', models.IntegerField(blank=True, null=True)),
                ('value', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]