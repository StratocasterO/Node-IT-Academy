USE universidad;

-- CONSULTES BÀSIQUES 1-9

SELECT apellido1, apellido2, nombre FROM persona WHERE tipo = "alumno" ORDER BY apellido1, apellido2, nombre;
SELECT nombre, apellido1, apellido1 FROM persona WHERE tipo = "alumno" AND telefono IS NULL;
SELECT * FROM persona WHERE tipo = "alumno" AND YEAR(fecha_nacimiento) = 1999;
SELECT * FROM persona WHERE tipo = "profesor" AND telefono IS NULL AND SUBSTR(nif, -1) = 'K';
SELECT * FROM asignatura WHERE cuatrimestre = 1 AND curso = 3 AND id_grado = 7;
SELECT apellido1, apellido2, p.nombre, d.nombre FROM persona p JOIN profesor pr ON p.id = pr.id_profesor JOIN departamento d ON d.id = pr.id_departamento ORDER BY apellido1, apellido2, p.nombre;
SELECT a.nombre, c.anyo_inicio, c.anyo_fin FROM persona p JOIN alumno_se_matricula_asignatura asma ON p.id = asma.id_alumno JOIN curso_escolar c ON c.id = asma.id_curso_escolar JOIN asignatura a ON a.id = asma.id_asignatura WHERE p.nif = "26902806M";
SELECT DISTINCT d.nombre FROM departamento d JOIN profesor p ON p.id_departamento = d.id JOIN asignatura a ON a.id_profesor = p.id_profesor JOIN grado g ON g.id = a.id_grado WHERE g.nombre = "Grado en Ingeniería Informática (Plan 2015)";
SELECT DISTINCT p.* FROM persona p JOIN alumno_se_matricula_asignatura asma ON p.id = asma.id_alumno JOIN curso_escolar c ON c.id = asma.id_curso_escolar WHERE anyo_fin = 2019 AND anyo_inicio = 2018;

-- CONSULTES LEFT JOIN RIGHT JOIN 1-6

SELECT d.nombre as dept, p.apellido1, p.apellido2, p.nombre FROM persona p LEFT JOIN profesor pr ON p.id = pr.id_profesor LEFT JOIN departamento d ON pr.id_departamento = d.id WHERE p.tipo = "profesor" ORDER BY d.nombre, p.apellido1, p.apellido2, p.nombre;
SELECT p.* FROM persona p LEFT JOIN profesor pr ON p.id = pr.id_profesor WHERE p.tipo = "profesor" AND pr.id_profesor IS NULL;
SELECT d.* FROM departamento d LEFT JOIN profesor p ON d.id = p.id_departamento WHERE p.id_departamento  IS NULL;
SELECT p.* FROM persona p JOIN profesor pr ON p.id = pr.id_profesor LEFT JOIN asignatura a ON pr.id_profesor = a.id_profesor WHERE a.id IS NULL;
SELECT * FROM asignatura WHERE id_profesor IS NULL;
SELECT d.* FROM alumno_se_matricula_asignatura asma LEFT JOIN asignatura a ON asma.id_asignatura = a.id LEFT JOIN profesor p ON a.id_profesor = p.id_profesor RIGHT JOIN departamento d ON p.id_departamento = d.id WHERE asma.id_curso_escolar IS NULL; 

-- CONSULTES RESUM 1-11

SELECT COUNT(*) FROM persona p WHERE p.tipo = "alumno";
SELECT COUNT(*) FROM persona p WHERE p.tipo = "alumno" AND YEAR(p.fecha_nacimiento) = 1999;
SELECT d.nombre AS departament, COUNT(*) AS num_professors FROM departamento d JOIN profesor p ON d.id = p.id_departamento GROUP BY d.id ORDER BY num_professors;
SELECT d.nombre AS departament, COUNT(p.id_profesor) AS num_professors FROM departamento d LEFT JOIN profesor p ON d.id = p.id_departamento GROUP BY d.id;
SELECT g.nombre AS grau, COUNT(*) AS num_assignatures FROM grado g JOIN asignatura a ON a.id_grado = g.id GROUP BY g.id;
SELECT g.nombre AS grau, COUNT(*) AS num_assignatures FROM grado g JOIN asignatura a ON a.id_grado = g.id GROUP BY g.id HAVING num_assignatures > 40;
SELECT g.nombre AS grau, a.tipo AS tipus, SUM(a.creditos) AS credits FROM grado g JOIN asignatura a ON a.id_grado = g.id GROUP BY a.tipo, g.id;
SELECT c.anyo_inicio, COUNT(distinct id_alumno) AS alumnes FROM curso_escolar c JOIN alumno_se_matricula_asignatura a ON a.id_curso_escolar = c.id GROUP BY c.id;
SELECT p.id, p.nombre, p.apellido1, p.apellido2, COUNT(a.id) AS assignatures FROM persona p LEFT JOIN asignatura a ON p.id = a.id_profesor GROUP BY p.id;
SELECT * FROM persona WHERE tipo = 'alumno' ORDER BY fecha_nacimiento DESC LIMIT 1;
SELECT p.* FROM profesor pr LEFT JOIN asignatura a ON pr.id_profesor = a.id_profesor JOIN persona p ON pr.id_profesor = p.id WHERE a.id IS NULL;