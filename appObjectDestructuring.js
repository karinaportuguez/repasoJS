/////////////////////// Object Destructuring //////////////////////////////////////////////////////////////////

const aprendiendoJS  = {
  version:{
    nueva:  'ES6+',
    anterior: 'ES5',
  },
  frameworks: ['React', 'VueJS', 'AngularJS']
}
// Destructuring es extraer valores de un objeto 

//console.log(aprendiendoJS);

//Version anterior

let version = aprendiendoJS.version.nueva;
let framework = aprendiendoJS.frameworks[1];
// console.log(version);
// console.log(framework);


// Destructuring FORMA NUEVA
let {nueva} = aprendiendoJS.version;
let {frameworks} = aprendiendoJS;
console.log(nueva);
console.log(frameworks[0]);

