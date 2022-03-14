## Entrevista Sprint 3


### JavaScript Bàsic
- Què és un callback?
- Què és una Promise? Quines són les seves parts fonamentals? Per què és una part fonamental de la programació asíncrona?
- Què és necessari utilitzar quan emprem la paraula clau 'await'? Per què?
- Com capturem un error en node?
- Com funciona l'herència en node?

### Bases de dades
- Quines diferències principals hi ha entre diagrames SQL i no-SQL?
- Com es carreguen les dades en una base de dades SQL? I en una no-SQL?
- Què és una Foreign Key en una base de dades SQL?
- Quines opcions hi ha per a modelar una relació One2Many en un esquema no-SQL?

### Patrons
- Explica com funciona un patró Singleton
- Explica com funciona un patró Middleware
- Explica com funciona un patró Factory Method
- Explica com funciona un patró MVC (model-vista-controlador)
- Què és la injecció de dependències?


### Prova de programació

```json
Escriu una funció que retorni promeses que es resolen en un temps aleatori entre 0 i 5 segons. Executa-la 10 vegades de manera que puguis indentificar quin és l'ordre en el que s'han executat i el temps en el que s'han resolt, escrivint a un array les dues coses cada vegada que es resolgui una, de manera que a l'array contingui algo així:

{ num: 8, time: '515' } 
{ num: 7, time: '626' } 
{ num: 6, time: '867' } 
{ num: 9, time: '1047' } 
{ num: 1, time: '1402' } 
{ num: 0, time: '2864' } 
{ num: 2, time: '3153' } 
{ num: 5, time: '3789' } 
{ num: 4, time: '3948' } 
{ num: 3, time: '4004' }
```

```json
Crea un objeto Operación que represente una operación básica de una calculadora entre dos operandos (suma, resta,multiplicación, división, módulo)

Ejemplo de operación: Operacion("resta",3,2)

Esta clase, además, deberá tener un método calcula(), que ejecute tal operación.

Necesitamos acumular en un array 5 operaciones y ejecutarlas después en bucle mostrando el resultado por pantalla.
```

```json
Necesitamos registrar datos de coches:

- Cilindrada
- Marca
- Matrícula
- Tipo combustible ("gasolina","gasoil","híbrido","eléctrico")
- Color

Crea un array con 6 coches (con los parámetros que quieras). 

Setea el color de los coches en posiciones pares a "azul".

Setea el color de los coches en posiciones impares a "rojo".

Muestra la marca de los coches que tienen combustible de tipo "gasolina".
```

```json
Necessitem enregistrar informació de jugadors de basket: 

- Nom
- Edat
- Alçada
- Pes
- Posició (Base,Escolta,Aler,Aler-Pivot,Pivot)

Enregistrarem informació d'un conjunt de jugadors (8 en total).

Mostra el nom i l'alçada dels jugadors que pasen dels 2 metres d'alçada.

Mostra el nom i l'edad dels jugadors que tenen menys de 21 anys.
```