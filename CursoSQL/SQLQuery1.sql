/*CREATE DATABASE bdcurso
ON PRIMARY(
	NAME = bdcurso,
	FILENAME = 'C:\Users\matheus.spindula\Desktop\CursoSQL',
	SIZE = 6MB,
	MAXSIZE = 15 MB,
	FILEGROWTH = 10%
)
*/


USE bdcurso

CREATE TABLE tb_cursos(
ID_Curso SMALLINT PRIMARY KEY IDENTITY(100,1),
Nome_Livro VARCHAR(50) NOT NULL,
ID_Professor SMALLINT NOT NULL,
Data_Criacao DATETIME NOT NULL,
Preco_Curso MONEY NOT NULL)


CREATE TABLE tb_professor(
ID_Professor SMALLINT PRIMARY KEY,
Nome_Prof VARCHAR(50),
Sobrenome_Prof VARCHAR(50)
)

CREATE TABLE tb_categoria(
	ID_Categoria SMALLINT PRIMARY KEY IDENTITY,
	Categoria VARCHAR (60) NOT NULL
)

ALTER TABLE tb_cursos
DROP COLUMN ID_Professor




ALTER TABLE tb_cursos
ADD ID_Professor SMALLINT NOT NULL
CONSTRAINT fk_ID_Professor FOREIGN KEY(ID_Professor)
REFERENCES tb_professor


ALTER TABLE tb_cursos
ADD ID_Categoria SMALLINT NOT NULL
CONSTRAINT fk_ID_Categoria FOREIGN KEY(ID_Categoria)
REFERENCES tb_categoria


---- Inserindo informacoes na tabela.

INSERT INTO TB_professor(ID_Professor,Nome_Prof,Sobrenome_Prof) VALUES(
'1',
'Matheus',
'Luiz'
)

INSERT INTO TB_professor(ID_Professor,Nome_Prof,Sobrenome_Prof) VALUES(
'2',
'Luiz',
'Matheus'
)

INSERT INTO TB_professor(ID_Professor,Nome_Prof,Sobrenome_Prof) VALUES(
'3',
'Breno',
'Lucas'
)

INSERT INTO tb_categoria(Categoria) VALUES ('WEB Designer')
INSERT INTO tb_categoria(Categoria) VALUES ('Progamação WEB')
INSERT INTO tb_categoria(Categoria) VALUES ('Banco de Dados')
INSERT INTO tb_categoria(Categoria) VALUES ('Programação Paralela')


INSERT INTO tb_cursos(Nome_Curso, Data_Criacao,Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'C#',
'20161230',
65.00,
1,
4
)

INSERT INTO tb_cursos(Nome_Curso, Data_Criacao,Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'Java WEB',
'20161230',
65.00,
2,
3
)


INSERT INTO tb_cursos(Nome_Curso, Data_Criacao,Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'Massa',
'20161230',
65.00,
2,
3
)
INSERT INTO tb_cursos(Nome_Curso, Data_Criacao,Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'PHP',
'20161230',
65.00,
2,
3
)

SELECT * FROM tb_cursos

TRUNCATE TABLE tb_cursos  --serve para apagar todos os registros de uma tabela

SELECT Nome_Prof FROM tb_professor
 

 DECLARE @NUMERO INT , @TEXTO2  VARCHAR(30)
 SET @NUMERO = 30
 SET @TEXTO2 = 'HUGO=F'

 IF @NUMERO = 25
 SELECT 'NUMERO CORRETO'

 IF @TEXTO2 = 'HUGO'
 BEGIN
 SET @NUMERO = 30
 SELECT @NUMERO 
 END

 ELSE
 BEGIN 
 SET @NUMERO = 50
 SELECT 'NUMERO INCORRETO'
 END

 --Laços de repetição 

 DECLARE @VALOR3 INT SET @VALOR3 = 0
 WHILE @VALOR3 < 10 
 BEGIN 
 PRINT 'Numero: ' + CAST(@VALOR3 AS VARCHAR(3))
 SET @VALOR3 = @VALOR3 + 1
 END;


