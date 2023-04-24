CREATE TABLE pessoa (
    id_pessoa INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
	login VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE planta (
    agenda INT PRIMARY KEY,
    planta_nome VARCHAR(50) NOT NULL,
    substrato_tipo VARCHAR (5000),
    agua_qtd INT,
    ultima_rega TIMESTAMP,
    id_pessoa INT,
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
-- Cria a tabela pessoa_planta
CREATE TABLE pessoa_planta (
  pessoa_planta_id INT PRIMARY KEY,
  id_pessoa INT,
  id_planta INT,
  FOREIGN KEY (id_pessoa) REFERENCES pessoa(id_pessoa),
  FOREIGN KEY (id_planta) REFERENCES planta(id_planta)
)
