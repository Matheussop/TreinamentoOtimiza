Use alunos

CREATE TABLE tb_alunos(CodAluno smallint, NomeAluno varchar(20),
 nota1 smallint,  nota2 smallint,  nota3 smallint,  nota4 smallint)

select * from tb_alunos

INSERT INTO tb_alunos VALUES (1, 'Hugo', 7, 8, 9, 8)
INSERT INTO tb_alunos VALUES (2, 'Pedro', 8, 8, 8, 8)
INSERT INTO tb_alunos VALUES (3, 'Paula', 4, 2, 2, 3)
INSERT INTO tb_alunos VALUES (4, 'Fabio', 9, 8, 5, 6)


CREATE FUNCTION nota_media(@nome VARCHAR(30)) RETURNS REAL AS
BEGIN 
DECLARE @Media REAL 
SELECT @Media = ((nota1 + nota2 + nota3 + nota4) * 2 )/5
FROM tb_alunos where NomeAluno = @nome
RETURN @Media
END

SELECT dbo.nota_media('Paula')
SELECT dbo.nota_media('HUGO')
