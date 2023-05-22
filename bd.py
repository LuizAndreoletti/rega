# Cadastro de pessoa

from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

# Configurações do banco de dados MySQL
db_config = {
    'host': 'localhost',
    'user': 'seu_usuario',
    'password': 'sua_senha',
    'database': 'seu_banco_de_dados'
}

@app.route('/', methods=['GET', 'POST'])

def index():
    if  request.method == 'POST':
        id = request.form['email']
        email = request.form['email']
        senha = request.form['senha']
        nome = request.form['login']
        sobrenome = request.form['login']

        # Conecta ao banco de dados
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Executa a query de inserção
        insert_query = "INSERT INTO pessoa (email, senha, nome, sobrenome) VALUES (%s, %s, %s, %s)"
        values = (email, senha, nome, sobrenome)
        cursor.execute(insert_query, values)

        # Confirma a transação e fecha a conexão
        conn.commit()
        conn.close()

        return "Pessoa cadastrada com sucesso!"

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
    

# Cadastro de planta da pessoa

import mysql.connector
# Configurações do banco de dados MySQL
db_config = {
 	'host': 'localhost',
 	'user': 'seu_usuario',
 	'password': 'sua_senha',
 	'database': 'seu_banco_de_dados'
 }
 
def inserir_planta(nome_planta, especie, substrato, medida_agua, ultima_rega, login):
 	try:
            # Conecta ao banco de dados
            conn = mysql.connector.connect(**db_config)
            cursor = conn.cursor() 
            # Executa a query de inserção
            insert_query = "INSERT INTO planta (nome_planta, especie, substrato, medida_agua, ultima_rega, login) VALUES (%s, %s, %s, %s, %s)"
            values = (nome_planta, especie, substrato, medida_agua, ultima_rega, login)
            cursor.execute(insert_query, values)
        # Confirma a transação e fecha a conexão
            conn.commit()
            conn.close()