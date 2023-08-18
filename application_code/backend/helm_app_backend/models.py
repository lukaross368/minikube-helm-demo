from django.db import models

# Create your models here.

class People(models.Model):
    uuid = models.UUIDField(primary_key=True,  editable=False)
    name = models.CharField(max_length=256)
    age = models.IntegerField()
    email = models.CharField(max_length=256)