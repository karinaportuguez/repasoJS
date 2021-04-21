//////////////////////////////////////    Object literal     ///////////////////////////

const persona = {
  id: 1,
  nombre: 'Juan',
  profecion: 'Desarrollador Web',
  edad: 50,
}

//console.log(persona);

// MAL
// const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profecion)
// console.log(mostrarCliente);

///////////////////////////////////    Object Constructor    ///////////////////////////

function Tarea(nombre, urgencia){
  this.nombre = nombre;
  this.urgencia = urgencia;

}
//Agregar un prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function(){
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}
//Crear una tarea 
const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
const tarea2 = new Tarea('Preparar cafe', 'Media');

console.log(tarea1);
// console.log(tarea2);

console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2.mostrarInformacionTarea());

