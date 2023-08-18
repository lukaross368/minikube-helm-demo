from django.db import models

# Create your models here.
import uuid

class People(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256)
    age = models.IntegerField()
    email = models.CharField(max_length=256)