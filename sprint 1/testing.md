# Canvis entrega testing 13/6/22

Reescriptura de l'exercici de testing amb Jest de l'itinerari de NodeJS de la [IT Academy](https://www.barcelonactiva.cat/es/itacademy).

___________________________

## Descripció
Per a aprendre a desenvolupar amb TDD (Test Driven Development) primer hem de conèixer les llibreries de testing. En els següents exercicis usaràs Jest, una llibreria amb utilitats per testejar codi Javascript. Podràs trobar la documentació en jestjs.io.

Abans de començar els següents exercicis, crea un projecte de Node amb la següent estructura:

- `app`. Carpeta amb el codi a testejar. Hauràs d'exportar les funcions i modificar-ne algunes (p.e. perquè en comptes de _console.log()_ facin _return_)
- `__tests__`. Carpeta amb els tests
- `.gitignore`. No oblidis aquest fitxer o pujaràs al repositori coses que no han de ser allà (mira la documentació oficial).
- `README.md`. Posa aquí la descripció del projecte i les instruccions d'instal·lació i arrencada en format Markdown (dóna un cop d'ull a la guía oficial Markdown si tens dubtes)
- `package.json`. Descripció i configuració del projecte.
- Una vegada creat el teu projecte, puja'l a Github.

Els tests que creis han de poder executar-se per la consola amb `npm`.

Afegir video al *Per saber-ne més*: [Test driven development](https://www.youtube.com/watch?v=89Pl2Uok8xc&ab_channel=SamMeech-Ward) i [Ús de JEST](https://www.youtube.com/watch?v=hz0_q1MJa2k&ab_channel=SamMeech-Ward)


### Nivell 1

- Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands i testeja la correcta execució d'aquestes funcions 

- Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici **Promises i Callbacks N1 E2**

- Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici **Promises i Callbacks N2 E1** i **Promises i Callbacks N2 E2** (_getEmployee()_ i _getSalary()_)

- Crea els tests corresponents per verificar el funcionament de l'exercici **Async / Await N1 E2**

Recorda per tots els tests que s'han de testejar coses com _inputs_, _outputs_, errors i casos límit, no només que 2 i 2 sumin 4.


### Nivell 2

- Verifica mitjançant tests l'execució de l'exercici **Async / Await N2 E1** utilitzant Jest Fake Timers.

- Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode _dirNom()_ en l'exercici **Classes & Arrow Functions - N2 E2** i testeja que funcionen

- Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici **Classes & Arrow Functions N3 E1**.


### Nivell 3

- Refès els exercicis **Promises i Callbacks N2 E1** i **Promises i Callbacks N2 E2** (_getEmployee()_ i _getSalary()_) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

- Utilitzant com a base els exercicis **Async / Await**, crea tests que forcin errors de funcionament i verifiquin que els errors llançats són els esperats.


### Objectius
Aprendre a crear tests mitjançant la llibreria Jest.

Aprendre quines característiques de les funcions de Javascript s'han de testejar.

Aprendre l'estructura bàsica d'un projecte de Node i la seva execució i la instal·lació de les dependències necessàries.


### Durada: 
3 dies


### Lliurament:
Crea una carpeta al teu repositori de l'_sprint 1_ amb l'estructura de projecte indicada i envia la URL al mentor perquè el corregeixi. 

Crea un arxiu de tests per cada nivell i assegura't de que tots tinguin un _describe()_ especificant què s'està testejant. 

Tingues en compte que el mentor també valorarà l'estructura del projecte, així com la pujada correcta de fitxers al repositori.