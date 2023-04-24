from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.id_pessoa

class Planta(models.Model):
    planta_name = models.CharField(max_length=100)
    nome = models.ForeignKey(Pessoa, on_delete=models.CASCADE)

    def __str__(self):
        return self.planta_name

class Pessoa(models.Model):
    login = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)

    def __str__(self):
        return self.login
