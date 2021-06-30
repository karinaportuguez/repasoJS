// METODOS EN ARREGLOS

// Filter, find y reduce


const personas = [
  {nombre: 'Juan', edad: 26 , aprendiendo: 'JavaScript'},
  {nombre: 'Pablo', edad: 22 , aprendiendo: 'Java'},
  {nombre: 'Karen', edad: 35 , aprendiendo: 'Node'},
  {nombre: 'Miguel', edad: 28 , aprendiendo: 'ReactJS'},
  {nombre: 'Alejandra', edad: 30 , aprendiendo: 'JavaScript'}
]


console.log(personas);

// Mayores de 20 años

const mayores = personas.filter(persona => {
  return persona.edad > 28;
})

console.log(mayores);

// Que aprende Alejandra y su edad

const alejandra = personas.find(persona =>{
  return persona.nombre === 'Alejandra'
});

console.log(`Alejandra esta aprendiendo: ${alejandra.aprendiendo} y su edad es de ${alejandra.edad} años`);

// Total de edades de personas

let totalEdades = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
},0);

console.log(totalEdades / personas.length);