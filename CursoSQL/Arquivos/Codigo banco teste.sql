Use Teste

CREATE TABLE Produtos(CodProduto smallint, NomeProduto varchar(20),
Preco money, Quant smallint, Total as (Preco * Quant))

select * from Produtos

INSERT INTO Produtos VALUES (1, 'Arroz', 15.00, 2)
INSERT INTO Produtos VALUES (2, 'Feijão', 10.00, 4)
INSERT INTO Produtos VALUES (3, 'Café', 12.00, 5)
INSERT INTO Produtos VALUES (4, 'Macarrão', 5.00, 3)

SELECT SUM(Preco)  AS Soma_Total FROM Produtos

--BACKUP
backup database Teste To disk = 'C:\SQL\teste.bak'