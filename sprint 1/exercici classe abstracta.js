// Entrega 2.2 - N3
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.


// Classe abstracta:
function Animal(name) {
    this.name = name;

    if (this.constructor === Animal) {
        throw new Error("No es pot instanciar una classe abstracta ❌");
    }
}

// Intent d'instanciar-la:
try {
    const gat = new Animal()
} catch (error) {
    console.log("!!! ERROR: " + error.message);
}

// Funció generadora d'objectes (amb prototips):
const crearAnimal = (name) => {
    // Crea la instància
    const animal = Object.create(Animal.prototype);
    // Fixa la propietat
    animal.name = name
    // Retorna l'objecte
    return animal
}

const garfield = crearAnimal("Gat 🐱");

console.log("Objecte instanciat:");
console.log(garfield);

console.log("És instància de Animal:");
console.log(garfield instanceof Animal);