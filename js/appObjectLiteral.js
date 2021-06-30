// Object literal enhancement

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman'];


// FORMA ANTERIOR

// const metallica ={
//   banda: 'banda',
//   genero: 'genero',
//   canciones: 'canciones',
// }

// FORMA NUEVA

const metallica = {banda, genero, canciones};

console.log(metallica);

