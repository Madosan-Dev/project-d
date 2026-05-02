CREATE DATABASE projectD;

USE projectD;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    url_foto TEXT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE carro(
	id INT PRIMARY KEY AUTO_INCREMENT,
    url_foto TEXT NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    cavalos INT NOT NULL,
    tracao VARCHAR(50),
    peso FLOAT NOT NULL,
    fk_usuario INT NOT NULL,
    CONSTRAINT ch_fk_usuario
		FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	CONSTRAINT ch_tracao
		CHECK(tracao IN ('FR','FF','AWD'))
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
        
	-- UNIQUE para apenas existir 4 rodas para aquele carro nas seguintes posições
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
    fk_pista INT,
    CONSTRAINT ch_clima
		CHECK (clima IN ('Chuva', 'Chuva Forte', 'Limpo')),
	
    CONSTRAINT ch_fk_pista
		FOREIGN KEY (fk_pista) REFERENCES pista(id)
);

CREATE TABLE historico_corrida(
	id INT PRIMARY KEY AUTO_INCREMENT,
    corredor_id INT,
    corrida_id INT,
    -- o número é pra identificar qual corredor é, 0 = 1 e 1 = 2
    numero TINYINT,
    -- se ganhador for igual a 0 = perdeu, 1 = ganhou
    ganhador TINYINT,
    -- esse é o tempo feito na corrida, ele não recebe NOT NULL pois se ele sofrer acidente
    -- fica salvo como NULL
    tempo TIME,
    
    CONSTRAINT ch_fk_corredor
		FOREIGN KEY (corredor_id) REFERENCES usuario(id),
	CONSTRAINT ch_fk_corrida
		FOREIGN KEY (corrida_id) REFERENCES corrida(id),
	
    -- UNIQUE para só ter apenas 2 corredores em uma corrida
	UNIQUE(numero, corrida_id)
);


SELECT * FROM usuario;

SELECT * FROM carro;