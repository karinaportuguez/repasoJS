//RECORDATORIO DE JS

//Declaracion de variables

//ANTES
//variables con var
var holaMundo;
holaMundo = 'Saludos mundo';
holaMundo = true;
holaMundo = 69;

console.log(holaMundo);
// No se puede asignar un nombre a una variable con un numero al inicio


//AHORA ES6+
//variables con const
//siempre debe tener un valor de inicio
const aprendiendo = 'Javascript';

console.log(`Estamos aprendiendo ${aprendiendo}`);




//variables con let
let miNombre;
miNombre = 'Karina Jannete';

console.log(`Hola, mio nombre es ${miNombre}`);


//Scope

  // var musica = 'Rock';

  // if(musica){
  //   var musica = 'Sonata Arctica';
  //   console.log(`Dentro del if ${musica}`);
  // }
  // console.log(`Fuera del if ${musica}`);


 let musica = 'Rock';

 if(musica){
   let musica = 'Sonata Arctica';
   console.log(`Dentro del if ${musica}`);
 }
console.log(`Fuera del if ${musica}`);

//tambien funciona con const

//TEMPLATE STRINGS     o    TAMPLATES LITERALS

const nombre = 'Karina';
const trabajo = 'Desarrollador Web';

console.log(`Mi nombre es ${nombre} y soy ${trabajo}`);

//concatenar con multiples lineas
const contenerodApp = document.querySelector('#app');
// let html = '<ul>' +
//                   '<li> Nombre: ' + nombre + '</li>'
//                   '<li> Trabajo: ' + trabajo + '</li>'+
//            '</ul>';

let html = `
            <ul> 
                  <li> Nombre:  ${nombre} </li>
                  <li> Trabajo: ${trabajo} </li>
           </ul>
           `; 
contenerodApp.innerHTML = html;
