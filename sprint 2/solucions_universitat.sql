-- CONSULTES 1-20

SELECT nombre FROM producto;
SELECT nombre, precio FROM producto;
SELECT * FROM producto;
SELECT nombre, precio, precio * 1.15 FROM producto;
SELECT nombre AS 'nombre de producto', precio AS euros, precio * 1.15 AS dólares FROM producto;
SELECT UPPER(nombre), precio FROM producto;
