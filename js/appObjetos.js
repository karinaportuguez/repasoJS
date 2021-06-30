//Objets

//      Object literal
///////////////////////////////////    ANTES     ///////////////////////////

const persona = {
  id: 1,
  nombre: 'Juan',
  profecion: 'Desarrollador Web',
  edad: 50,
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.profecion);
console.log(persona['edad']);

//Object Constructor


function Tarea(nombre, urgencia){
  this.nombre = nombre;
  this.urgencia = urgencia;

}

const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
const tarea2 = new Tarea('Preparar cafe', 'Media');
const tarea3 = new Tarea('Comprar alimento para gatos', 'Urgente');
const tarea4 = new Tarea('Comer', 'Baja');

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);


function mostrarInformacionTarea(tarea, priority){
  return `La tarea ${tarea} tiene una prioridad de ${priority}`;
}

const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);

console.log(mostrarInfo);
