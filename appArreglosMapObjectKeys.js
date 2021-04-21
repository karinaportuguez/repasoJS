// Arreglos y .map
 carrito = ['Producto1', 'Producto2', 'Producto3'];

//console.log(carrito);


// forEach recomendado apra imprimir cosas en el html

// const appContenedor = document.querySelector('#app');
// let html = '';
// carrito.forEach(producto => {
//   html += `<li>${producto}</li>`;
// })

//appContenedor.innerHTML = html;

carrito.map(producto =>{
  return 'el producto es: ' + producto;
})

// copiarlo y pegarlo en la consola

// Regresa un nuevo arreglo con el arreglo anterior

const persona = {
  nombre: 'Juan',
  profesion: 'Desarrollador Web',
  edad: 50,
}

const {nombre} = persona;
console.log(Object.keys(persona));