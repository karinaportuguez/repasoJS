// Programacion orientada a objetos - Clases

// Son los planos o bases para crear un objeto multiples veces
// INVESTIGAR LOS PROTOTIPES

class Tarea {
  constructor(nombre, prioridad){
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar(){
    return `La tarea: ${this.nombre}, tiene una prioridad: ${this.prioridad}`;
  }
}

//Crear objetos 

let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender PHP', 'Baja');
let tarea3 = new Tarea('Preparar cafe', 'Media');
let tarea4 = new Tarea('Alimentar a los michis', 'Alta');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());