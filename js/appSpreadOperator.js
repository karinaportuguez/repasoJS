//Spread Operator  ...

let lenguajes = ['JavaCript', 'PHP', 'Python'];
let frameworks = ['React', 'Laravel', 'Django'];

//       Antes / Otra forma
// let combinacion = lenguajes.concat(frameworks)

let combinacion = [...lenguajes, ...frameworks];


let copialenguajes = [...lenguajes];


// Copiar un arreglo con metodos 
// no sirve mucho por que se invierte el orden
let [primero] = [...lenguajes].reverse();


let ultimo = lenguajes.reverse();


function suma(a, b, c) {
  console.log(a+b+c);
}

const numeros = [1,2,3];

suma(...numeros);


console.log(primero);

console.log(ultimo);
console.log(combinacion);
console.log(copialenguajes);
