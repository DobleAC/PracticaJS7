const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solicitarArreglo = (numeroArreglo, cantidadElementos, arreglo = []) => {
  if (arreglo.length < cantidadElementos) {
    rl.question(`Introduce el elemento ${arreglo.length + 1} del arreglo ${numeroArreglo}: `, (input) => {
      arreglo.push(input);
      solicitarArreglo(numeroArreglo, cantidadElementos, arreglo); 
    });
  } else {
    return arreglo;
  }
};

const solicitarPrimerArreglo = () => {
  rl.question('¿Cuántos elementos tendrá el primer arreglo? ', (cantidad) => {
    const cantidadElementos = parseInt(cantidad, 10);
    if (isNaN(cantidadElementos) || cantidadElementos <= 0) {
      console.log('Por favor, introduce un número válido de elementos.');
      solicitarPrimerArreglo(); 
    } else {
      const arreglo1 = solicitarArreglo(1, cantidadElementos);
      solicitarSegundoArreglo(arreglo1); 
    }
  });
};

const solicitarSegundoArreglo = (arreglo1) => {
  rl.question('¿Cuántos elementos tendrá el segundo arreglo? ', (cantidad) => {
    const cantidadElementos = parseInt(cantidad, 10);
    if (isNaN(cantidadElementos) || cantidadElementos <= 0) {
      console.log('Por favor, introduce un número válido de elementos.');
      solicitarSegundoArreglo(arreglo1); 
    } else {
      const arreglo2 = solicitarArreglo(2, cantidadElementos);
      const arregloConcatenado = arreglo1.concat(arreglo2);
      console.log('Arreglo concatenado:', arregloConcatenado);
      rl.close(); 
    }
  });
};

solicitarPrimerArreglo();
