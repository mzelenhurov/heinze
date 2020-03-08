from django.db import models


class LeadSelectData(models.Model):
    class Meta:
        db_table = "leadSelectData"

    orgID = models.IntegerField(null=True, blank=True)
    country = models.CharField(null=True, blank=True, max_length=255)
    zip = models.CharField(null=True, blank=True, max_length=255)
    city = models.CharField(null=True, blank=True, max_length=255)
    latitude = models.CharField(null=True, blank=True, max_length=255)
    longitude = models.CharField(null=True, blank=True, max_length=255)
    propertyID = models.IntegerField(null=True, blank=True)
    property = models.CharField(null=True, blank=True, max_length=255)
    valueID = models.IntegerField(null=True, blank=True)
    value = models.CharField(null=True, blank=True, max_length=255)


