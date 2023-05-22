Select * from planta where login = $login

CREATE TABLE pessoa (
        id_pessoa int,
        nome VARCHAR(50) NOT NULL,
        sobrenome VARCHAR(50) NOT NULL,
        email VARCHAR(150) NOT NULL,
        Senha VARCHAR(150) NOT NULL
);

CREATE TABLE planta (
        Id int not null,
        nome_planta VARCHAR(50) NOT NULL,
        Especie  VARCHAR(150) NOT NULL,
        substrato VARCHAR (5000),
        medida_agua INT,
        ultima_rega TIMESTAMP,
        id_pessoa int (50) not null,
        FOREIGN KEY (id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE agenda_rega (
        id_agenda INT PRIMARY KEY,
        id_planta INT,
        hora_rega TIME,
        dia_rega VARCHAR(10),
        FOREIGN KEY (id_planta) REFERENCES planta(id_planta)
);

CREATE TABLE fertilizante (
        id_fert INT PRIMARY KEY,
        nome_comercial VARCHAR(50) NOT NULL,
        nutriente_1 VARCHAR(50),
        nutriente_2 VARCHAR(50),
        nutriente_3 VARCHAR(50),
        frequencia_uso INT,
        ultima_aplicacao TIMESTAMP,
        id_planta INT,
        FOREIGN KEY (id_planta) REFERENCES planta(id_planta)
);
