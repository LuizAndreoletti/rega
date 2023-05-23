#visualização de registros

from flask import Flask, render_template

app = Flask(__name__)

class Planta:
    def __init__(self, nome, especie, substrato, data):
        self.nome = nome
        self.especie = especie
        self.substrato = substrato
        self.fertilizante = fertilizante
        self.data = data

@app.route('/')
def exibir_planta():
    planta = Planta("Ana", "Lírio", "Solo natural","Tecnutri", "2023-05-20")
    return render_template('planta.html', planta=planta)

if __name__ == '__main__':
    app.run()

