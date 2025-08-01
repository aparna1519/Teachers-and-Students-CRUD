from django.db import models

class Teachers_model(models.Model):
    name = models.CharField(max_length=20)
    subject = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    image = models.ImageField(upload_to="teachers_pics/", blank=True, null=True)

    def __str__(self):
        return (f"{self.name} -- {self.subject}")
