## Descripció
Per a aprendre a desenvolupar amb TDD (Test Driven Development) primer hem de conèixer les llibreries de testing. En els següents exercicis pots utilitzar JEST o Chai, com desitgis. Ambdues són llibreries amb utilitats per a testejar codi Javascript. Podràs trobar la documentació en jestjs.io o bé en chaijs.com

Abans de començar els següents exercicis, crea un projecte node amb la següent estructura:

- `app`. Carpeta amb el codi a testejar
- `__tests__`. Carpeta amb els tests
- `.gitignore`. No oblidis aquest fitxer o pujaràs al repositori coses que no han de ser allà (mira la documentació oficial).
- `Readme.md`. Posa aquí la descripció del projecte en format Markdown (dóna un cop d'ull a la guía oficial Markdown si tens dubtes)
- `package.json`. Descripció i configuració del projecte.
- Una vegada creat el teu projecte, puja'l a Github.

Els tests que creïs han de poder executar-se per la consola amb `npm` (si encara no ho coneixes, ara és el moment d'aprendre).


### Nivell 1
- Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

- Crea els tests corresponents per verificar el funcionament de l'exercici **Async / Await Nivell 1 - Exercici 1**

- Crea els tests corresponents per verificar el funcionament de l'exercici **Async / Await Nivell 2 - Exercici 1**

- Crea els tests corresponents per verificar el funcionament de l'exercici **Promises & Callbacks Nivell 2 - Exercici 3**

- Verifica mitjançant tests l'execució de l'exercici **Async / Await Nivell 2 Exercici 1** utilitzant Jest Fake Timers.


### Nivell 2

- Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode decirNombre en l'exercici **Classes & Arrow Functions - Nivell 2 Exercici 2**

- Verifica mitjançant tests l'exercici **Classes & Arrow Functions Nivell 3 - Exercici 1**.


### Nivell 3

- Refès l'exercici **Async / Await Nivell 1** accedint a un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

- Utilitzant com a base l'exercici **Async / Await Nivells 2 i 3**, crea un test que forci errors de funcionament i verifiqui que l'error llançat per la funció és l'esperat.


### Objectius
Aprendre a crear tests mitjançant les llibreries Chai i JEST.

### Durada: 
3 dies

### Lliurament:
Crea un repositori per a aquest exercici solament, amb l'estructura de projecte indicada, i envia la URL al mentor perquè el corregeixi. Tingues en compte que el mentor valorarà l'estructura de projecte correcta, asi com la pujada correcta de fitxers al repositori.