# Generated by Django 3.0.3 on 2020-03-07 12:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('heinze_site', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Temp',
            new_name='LeadSelectData',
        ),
        migrations.AlterModelTable(
            name='leadselectdata',
            table='leadSelectData',
        ),
    ]
