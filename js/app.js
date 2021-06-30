// Programacion orientada a objetos - Clases

// Son los planos o bases para crear un objeto multiples veces
// INVESTIGAR LOS PROTOTIPES

//Las clases inician con mayuscula

class Tarea {
  constructor(nombre, prioridad){  //El constructor pasa los argumentos hacia el objeto y se ejecuta primero al crear una instancia
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  //cuando pasas una funcion a una clase es un metodo
  mostrar(){ // metodo o prototype o funcion dentro de una clase
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

//Las classes solo se corren en verciones modernas de javascript
// si se prueba esto en internet explorer 8 o 9 no lo soporta
//pero hay formas de hacerlo compatible