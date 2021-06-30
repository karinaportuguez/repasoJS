//FUNCIONES


//Function declaration

//El codigo javascript corre en dos partes y puede ser llamada la funcion antes de ser declarada
saludar('Jannete');

function saludar(nombre){
  console.log(`Bienvenido ${nombre}`);
}

saludar('Juan');
saludar('Alejandra');
saludar('Manuel');

//Function expression

//No puede ser llamada antes de ser declarada
const cliente = function(nombreCliente){
  console.log(`Mostrar datos del cliente: ${nombreCliente}`);
}

cliente('Juan');


///////////////////////////////////////////////////////////////////////////
//Parametros por default en una funcion
//Resesa undefined si no se le asigna un parametro
//////////////////////////////////////////////////////////////////

//**** Function declaration ****//

// function actividad(nombre = 'Walter White',actividad = 'Enseñar quimica'){
//   console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
// }

//**** Function exprecion ****//

const actividad = function(nombre = 'Walter White',actividad = 'Enseñar quimica'){
  console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprender Javascript');
actividad('Pedro', 'Creando un sitio Web');
actividad('antonio');
actividad();

//**** Arrow Functions ****//
//ANTES

// let viajando = function(destino){
//   return `Viajando a la ciudad de: ${destino}`;
// }


//AHORA

// let viajando = (destino, duracion) =>{
//   return `Viajando a la ciudad de: ${destino} por ${duracion}`;
// }

// MAS SIMPLIFICADO

let viajando = (destino, duracion) => `Viajando a la ciudad de: ${destino} por ${duracion}`;

let viaje = viajando('Paris', '9 dias');

console.log(viaje);