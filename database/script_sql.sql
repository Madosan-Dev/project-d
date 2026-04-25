CREATE DATABASE projectD;

USE projectD;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    url_foto TEXT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE carro(
	id INT PRIMARY KEY AUTO_INCREMENT,
    url_foto TEXT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cavalos INT NOT NULL,
    fk_usuario INT NOT NULL,
    CONSTRAINT ch_fk_usuario
		FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE pneu(
	id INT PRIMARY KEY AUTO_INCREMENT,
    desgaste DECIMAL(5,2) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    posicao VARCHAR(45) NOT NULL,
    fk_carro INT,
    
    CONSTRAINT ch_fk_carro
		FOREIGN KEY (fk_carro) REFERENCES carro(id),
        
	CONSTRAINT ch_posicao
		CHECK(posicao IN 
        ('Dianteira Direita','Dianteira Esquerda','Traseira Direita','Traseira Esquerda')),
	CONSTRAINT ch_tipo
		CHECK(tipo IN ('Rally','Semi Slick','Slick')),
	UNIQUE(fk_carro,posicao)
);

CREATE TABLE pista(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    inclinacao DECIMAL(3,1),
    sentido_inclinacao VARCHAR(20),
	CONSTRAINT ch_sentido_inclinacao
		CHECK(sentido_inclinacao IN ('Subida', 'Descida'))
);

CREATE TABLE conhecimento_pista(
	pista_id INT,
    usuario_id INT,
    nivel DECIMAL(3,1),
    corridas_feitas INT,
    
    CONSTRAINT ch_nivel
		CHECK(nivel BETWEEN 0 AND 100),
    CONSTRAINT ch_pista_id
		FOREIGN KEY (pista_id) REFERENCES pista(id),
	CONSTRAINT ch_usuario_id
		FOREIGN KEY (usuario_id) REFERENCES usuario(id),
	
	-- a criaçao da chave composta
    PRIMARY KEY (pista_id,usuario_id)
);

CREATE TABLE corrida(
	id INT PRIMARY KEY AUTO_INCREMENT,
    clima VARCHAR(45),
    tempo1 TIME,
    tempo2 TIME,
    fk_pista INT,
	corredor1_id INT,
    corredor2_id INT,
    ganhador_id INT,
    
    CONSTRAINT ch_clima
		CHECK (clima IN ('Chuva', 'Chuva Forte', 'Limpo')),
    
    CONSTRAINT ch_fk_pista
		FOREIGN KEY (fk_pista) REFERENCES pista(id),
	CONSTRAINT ch_corredor1_id
		FOREIGN KEY (corredor1_id) REFERENCES usuario(id),
	CONSTRAINT ch_corredor2_id
		FOREIGN KEY (corredor2_id) REFERENCES usuario(id),
	CONSTRAINT ch_ganhador_id
		FOREIGN KEY (ganhador_id) REFERENCES usuario(id) 
);