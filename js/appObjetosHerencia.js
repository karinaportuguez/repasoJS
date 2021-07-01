// Para usar libreria de react hay que heredar sus clases y Metodos

//Ventajas: Puedes crear una clase padre y heredar todo eso a una clase distintamenta


class Tarea {
  constructor(nombre, prioridad){  
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar(){ 
    console.log(`La tarea: ${this.nombre}, tiene una prioridad: ${this.prioridad}`); 
  }
}

class ComprasPendientes extends Tarea{
  constructor(nombre, prioridad, cantidad){
    super(nombre, prioridad)
    this.cantidad = cantidad;
  }
  mostrar(){ 
    super.mostrar();
    console.log(`Compra ${this.cantidad} ${this.nombre}, tiene una prioridad ${this.prioridad}`);
  }
  hola(){
      
    console.log(`Hola`);
  }
}


//Crear objetos 

let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender PHP', 'Baja');
let tarea3 = new Tarea('Preparar cafe', 'Media');
let tarea4 = new Tarea('Alimentar a los michis', 'Alta');

tarea1.mostrar();
tarea2.mostrar();
tarea3.mostrar();
tarea4.mostrar();

let compra1 = new ComprasPendientes('jabones','Urgente', 3)
compra1.mostrar();
compra1.hola();

//Se heredan los metodos y todo lo que tenga el constructor padre
