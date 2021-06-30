// PROMISES 

//llamados asincronos en una api 

const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(()=>{
    let descuento = false;

    if (descuento){
      resolve('Descuento aplicado');
    }else{
      reject('No se pudo aplicar descuento')
    }
  },3000);

});
 
aplicarDescuento.then(resultado=>{
  console.log(resultado);
}).catch(error => {
  console.log(error);
})


// NOTA: si la promesa regresa pending hace falta algo en el codigo .then
