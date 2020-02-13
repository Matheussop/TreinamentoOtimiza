CREATE DATABASE cursos
ON PRIMARY(
NAME = cursos,
FILENAME = 'C:\SQL\cursos.MDF',
SIZE = 6MB,
MAXSIZE=15MB,
FILEGROWTH = 10%
)

USE cursos


CREATE TABLE tb_cursos(
ID_Curso SMALLINT PRIMARY KEY IDENTITY(100,1),
Nome_Livro VARCHAR(50) NOT NULL,
ID_Professor SMALLINT NOT NULL,
Data_Criacao DATETIME NOT NULL,
Preco_Curso MONEY NOT NULL )


CREATE TABLE tb_professor(
ID_Professor SMALLINT PRIMARY KEY,
Nome_Prof VARCHAR(50),
Sobrenome_Prof VARCHAR(75)
)


CREATE TABLE tb_categoria(
ID_Categoria SMALLINT PRIMARY KEY IDENTITY,
Categoria VARCHAR(60) NOT NULL
)


USE cursos

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



CREATE TABLE tb_teste(
ID_Categoria SMALLINT PRIMARY KEY IDENTITY,
Categoria VARCHAR(60) NOT NULL
)

DROP TABLE tb_teste



INSERT INTO tb_professor(ID_Professor, Nome_Prof, Sobrenome_Prof) VALUES (
'1',
'Hugo',
'Vasconcelos'
)

INSERT INTO tb_professor(ID_Professor, Nome_Prof, Sobrenome_Prof) VALUES (
'2',
'Fábio',
'Vasconcelos'
)

INSERT INTO tb_professor(ID_Professor, Nome_Prof, Sobrenome_Prof) VALUES (
'3',
'Paula',
'Freitas'
)

INSERT INTO tb_professor(ID_Professor, Nome_Prof, Sobrenome_Prof) VALUES (
'4',
'Daniela',
'Freitas'
)


INSERT INTO tb_categoria(Categoria) VALUES (
'WEB Designer'
)

INSERT INTO tb_categoria(Categoria) VALUES (
'Programação WEB'
)

INSERT INTO tb_categoria(Categoria) VALUES (
'Banco de Dados'
)

INSERT INTO tb_categoria(Categoria) VALUES (
'Programação Desktop'
)

INSERT INTO tb_cursos(Nome_Curso, Data_Criacao, Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'Lógica de Programação',
'20161230',
25.00,
1,
4
)

INSERT INTO tb_cursos(Nome_Curso, Data_Criacao, Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'Java WEB',
'20161230',
65.00,
2,
3
)

INSERT INTO tb_cursos(Nome_Curso, Data_Criacao, Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'PHP',
'20161230',
65.00,
2,
3
)


INSERT INTO tb_cursos(Nome_Curso, Data_Criacao, Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'Pentest',
'20161230',
200.00,
1,
3
)



INSERT INTO tb_cursos(Nome_Curso, Data_Criacao, Preco_Curso,ID_Professor,ID_Categoria) VALUES (
'Java Desktop',
'20161230',
55.00,
4,
3
)

--FAZ UMA CONSULTA MOSTRANDO TODOS OS REGISTROS DA TABELA
SELECT * FROM tb_cursos

--MOSTRA A QUANTIDADE DE REGISTROS INSERIDOS NA TABELA
SELECT COUNT(*) FROM tb_cursos

--APAGAR TODOS OS REGISTROS DE UMA TABELA
TRUNCATE TABLE tb_cursos


SELECT Nome_Prof FROM tb_professor
SELECT Nome_Curso, ID_Professor from tb_cursos

SELECT * FROM tb_cursos ORDER BY Nome_Curso

--DISTINCT NÃO EXIBE VALORES REPETIDOS
SELECT DISTINCT ID_Professor FROM tb_cursos

SELECT * FROM tb_cursos WHERE ID_Professor = '3'

SELECT * FROM tb_cursos WHERE ID_Curso > 100 and ID_Curso < 103

SELECT * FROM tb_cursos WHERE ID_Curso > 103 or ID_Professor = 4

--MOSTRAR OS PRIMEIROS REGISTROS COM BASE EM UMA PORCENTAGEM
SELECT TOP 50 PERCENT Nome_Curso FROM tb_cursos

--MOSTRAR APENAS OS DOIS PRIMEIROS REGISTROS DA TABELA CURSOS
SELECT TOP 2 Nome_Curso FROM tb_cursos

SELECT Nome_Curso AS Curso FROM tb_cursos

SELECT Nome_Curso FROM tb_cursos

--INSTRUÇÃO PARA UNIR CAMPOS EM UMA CONSULTA
SELECT ID_Professor FROM tb_professor UNION ALL
SELECT ID_Professor FROM tb_cursos

SELECT Nome_Prof FROM tb_professor UNION ALL
SELECT Nome_Curso FROM tb_cursos


SELECT ID_Curso, Nome_Curso, Preco_Curso INTO tb_cursos_preco 
FROM tb_cursos
WHERE ID_Curso > 102


--FUNÇÕES DE SOMA, MÉDIA, ETC
SELECT MAX(Preco_Curso) AS Maior_Preco FROM tb_cursos

SELECT MIN(Preco_Curso) AS Menor_Preco FROM tb_cursos

SELECT AVG(Preco_Curso)  AS Media_Cursos FROM tb_cursos

--SELECT COUNT(*) FROM tb_cursos

SELECT SUM(Preco_Curso)  AS Soma_Total FROM tb_cursos

--BUSCAR VALORES DENTRO DE UM INTERVALO
SELECT Nome_Curso As Curso, Preco_Curso as Preco FROM tb_cursos
WHERE Preco_Curso BETWEEN 25 AND 60


SELECT Nome_Curso FROM tb_cursos WHERE Nome_Curso LIKE '%o'


SELECT * FROM tb_cursos INNER JOIN tb_professor 
ON tb_cursos.ID_Professor = tb_professor.ID_Professor

SELECT C.Nome_Curso, P.Nome_Prof FROM tb_cursos As C 
INNER JOIN tb_professor AS P ON C.ID_Professor = P.ID_Professor


use cursos

SELECT * FROM tb_cursos

create index indice_nome_curso on tb_cursos(Nome_Curso)

--Criar regras preco não pode ser menor que 15,00

create rule rp_preco as @valor > 10.00

EXECUTE sp_bindrule rp_preco, 'tb_cursos.Preco_Curso'

UPDATE tb_cursos set Preco_Curso = 85 where ID_Curso = 103
UPDATE tb_cursos set Preco_Curso = 10 where ID_Curso = 103

SELECT 'HUGO ' + 'VASCONCELOS' AS NOME
SELECT Nome_Prof + ' ' + Sobrenome_Prof as 'Nome Completo' from tb_professor

select 'Eu gosto do curso ' + Nome_Curso as 
'Meu Curso' FROM tb_cursos WHERE ID_Professor = 4

SELECT SERVERPROPERTY('COLLATION') AS COLAÇÃO

CREATE VIEW vw_cursosProfessores as select tb_cursos.Nome_Curso
as Curso, tb_professor.Nome_Prof as Professor FROM tb_cursos 
INNER JOIN tb_professor ON tb_cursos.ID_Professor = 
tb_professor.ID_Professor

SELECT CURSO, PROFESSOR FROM vw_cursosProfessores WHERE
CURSO LIKE 'P%'

--CRIAR VARIAVEIS
DECLARE @VALOR INT, @TEXTO VARCHAR(45), @DATA DATE, @SALARIO MONEY
SET @VALOR = 50
SET @TEXTO = 'HUGO'
SET @DATA = GETDATE()

SELECT @VALOR AS VALOR, @TEXTO AS TEXTO, @DATA AS DATA, 
@SALARIO AS SALÁRIO

DECLARE @CURSO VARCHAR(30)
SELECT @CURSO = Nome_Curso FROM tb_cursos where ID_Curso = 102
SELECT @CURSO AS 'NOME DO CURSO'


DECLARE @PRECO MONEY, @QUANTIDADE INT, @NOME VARCHAR(30)
SET @QUANTIDADE = 6
SELECT @PRECO = PRECO_CURSO, @NOME = Nome_Curso FROM tb_cursos
where ID_Curso = 105
SELECT @NOME AS 'NOME DO CURSO',
 @PRECO * @QUANTIDADE AS 'PRECO DOS CURSOS'

 SELECT * FROM tb_cursos


 --CONVERSÕES PARA STRINGS
 SELECT 'O PRECO DO CURSO ' + Nome_Curso + ' é de R$ ' + 
 CAST(Preco_Curso AS VARCHAR(6)) as
 Item FROM TB_CURSOS WHERE ID_PROFESSOR = 3

 SELECT 'A DATA DE LANÇAMENTO ' + CONVERT(VARCHAR(20), DATA_CRIACAO, 103)
 FROM tb_cursos WHERE ID_Curso = 102

 --testes condicionais
DECLARE @NUMERO VARCHAR(5), @TEXTO2 VARCHAR(30) 
SET @NUMERO = 26
SET @TEXTO2 = 'HUGOF'

IF @NUMERO = 25
SELECT 'NUMERO CORRETO'
ELSE
SET @NUMERO = 26
SELECT 'ESTE NÚMERO É INCORRETO ' + @NUMERO

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


--laços de repetição
DECLARE @VALOR3 INT SET @VALOR3 = 0
WHILE @VALOR3 < 10
BEGIN
PRINT 'NUMERO: ' + CAST(@VALOR3 AS VARCHAR(3))
SET @VALOR3 = @VALOR3 + 1
END;

DECLARE @CODIGO INT  SET @CODIGO = 100
WHILE @CODIGO < 107 
BEGIN
SELECT ID_CURSO AS ID, NOME_CURSO AS CURSO, PRECO_CURSO AS PRECO
FROM tb_cursos WHERE ID_Curso = @CODIGO
SET @CODIGO = @CODIGO + 1
END


--funcao de retorno
CREATE FUNCTION retornar_dados(@valor4 REAL) RETURNS Table as
RETURN(
SELECT C.Nome_Curso, P.Nome_Prof, T.Categoria FROM 
TB_CURSOS AS C INNER JOIN tb_professor AS P ON C.ID_Professor =
P.ID_Professor INNER JOIN tb_categoria AS T ON C.ID_Categoria =
T.ID_Categoria WHERE C.Preco_Curso > @valor4
)

select Nome_Curso, Nome_Prof FROM retornar_dados(70)

create function multi_tabela()
RETURNS @valores TABLE(Nome_Curso varchar(50), data_criacao datetime,
Categoria varchar(50), Preco_Curso money) a
BEGIN
INSERT @valores (Nome_Curso, data_criacao, Categoria, Preco_Curso)
SELECT C.Nome_Curso, C.Data_Criacao, t.Categoria, C.Preco_Curso 
FROM tb_cursos AS C INNER JOIN tb_categoria AS T ON C.Id_Categoria =
t.ID_Categoria RETURN
END

select * from multi_tabela()

CREATE TRIGGER teste_trigger ON tb_categoria AFTER INSERT
AS PRINT 'Registro inserido com sucesso'
INSERT INTO tb_categoria VALUES('Programação de Jogos')

CREATE TRIGGER novo_trigger ON tb_categoria AFTER INSERT
AS INSERT INTO tb_professor VALUES (11, 'Pedro', 'Henrique')
INSERT INTO tb_cursos VALUES ('Curso de Pygame', '20160808', 65, 1, 4)

INSERT INTO tb_categoria VALUES('Redes')

DROP TRIGGER  trigger_rec

SELECT * FROM tb_professor


CREATE TRIGGER edicao_trigger ON tb_professor AFTER INSERT, UPDATE
AS IF UPDATE(Nome_Prof)
BEGIN
PRINT 'O NOME DO PROFESSOR FOI ALTERADO'
END
ELSE 
BEGIN
PRINT 'O NOME DO PROFESSOR NÃO FOI ALTERADO'
END

UPDATE tb_professor SET Nome_Prof = 'Freitas' 
WHERE ID_Professor = 1


ALTER DATABASE cursos
SET RECURSIVE_TRIGGERS ON

CREATE TABLE tb_trigger_recursivo(Codigo INT PRIMARY KEY)
SELECT CODIGO FROM tb_trigger_recursivo

CREATE TRIGGER trigger_rec ON tb_trigger_recursivo
AFTER INSERT AS
DECLARE @cod INT
SELECT @cod = MAX(codigo) FROM tb_trigger_recursivo
if @cod < 40
BEGIN
INSERT INTO tb_trigger_recursivo SELECT max(codigo)+1
FROM tb_trigger_recursivo 
END
ELSE
BEGIN
PRINT 'TRIGGER RECURSIVO FINALIZADO' 
END

INSERT INTO tb_trigger_recursivo values(12)