// Metodos o funciones en un objeto

const persona = {
  nombre: 'Juan',
  trabajo: 'Desarrollador Web',
  edad: 50,
  musicaRock: true,
  mostrarInformacion: function() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
  }
}

//cuando no colocas this no manda error ni manda la funsion

persona.mostrarInformacion();

